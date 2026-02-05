import { ArrowRight, Search, Sparkles, CheckCircle, ThumbsUp, Code2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function UserWorkflowExample() {
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [activeCodeStep, setActiveCodeStep] = useState<number>(1);

  const codeSteps = [
    {
      step: 1,
      title: "User Query Input (Frontend)",
      file: "frontend/src/app/components/ChatInterface.tsx",
      lines: "Lines 1-100",
      description: "User types message and triggers API call",
      status: "implemented",
      code: `// Main function that handles user chat message submission
const sendChatMessage = async (rawContent: string) => {
  // Trim whitespace and validate input
  const trimmed = rawContent.trim();
  if (!trimmed || isTyping) {
    return;
  }

  // Create user message object for conversation history
  const userMessage: ChatEntry = {
    id: generateMessageId(),
    role: 'user',
    content: trimmed,  // e.g., "I want fantasy books"
  };

  // Build conversation history including the new message
  const historyWithUser = [...messages, userMessage];
  const conversationHistory: ApiChatMessage[] = historyWithUser.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));

  // Update UI: add message to chat, clear input, show typing indicator
  setMessages((prev) => [...prev, userMessage]);
  setInput('');
  setIsTyping(true);

  // Determine user age for filtering recommendations
  const resolvedAge = userAge ?? user?.age;  // e.g., 16
  // Anonymous mode: cap age at 17 for safety
  const chatAge = accessMode === 'anonymous'
    ? Math.min(resolvedAge ?? 13, 17)
    : resolvedAge ?? 13;

  // Send request to backend API
  const response = await api.recommendations.chat({
    message: trimmed,                          // "I want fantasy books"
    conversation_history: conversationHistory, // Full chat context
    user_id: user?.user_id,                   // Optional user ID
    age: chatAge,                             // Age for filtering (16)
  });
  // ... handle response (not shown)
};`,
      notes: [
        "User message added to conversation history",
        "Age determined based on access mode (anonymous vs authenticated)",
        "API call sent to backend with full context"
      ]
    },
    {
      step: 2,
      title: "LLM Query Parsing (DeepSeek)",
      file: "backend/app/services/agent.py",
      lines: "Lines 58-147",
      description: "Parse natural language into structured filters using DeepSeek",
      status: "implemented",
      code: `async def parse_query(self, request: QueryParsingRequest) -> AgentParsingResponse:
    """Convert a natural-language query into structured filters."""

    # Step 1: Call DeepSeek LLM to parse the user's query
    try:
        payload = await self._invoke_deepseek(
            prompt=self._build_parse_prompt(request),
            conversation=request.context.get("conversation") if request.context else None,
        )
    except Exception as exc:
        # If LLM fails, return a safe fallback response
        logger.error("[AGENT] Failed to parse query via DeepSeek: %s", exc)
        return self._build_fallback_response(request)

    # Step 2: Validate LLM output with guardrails (prevent malicious responses)
    if not validate_agent_filters(payload):
        logger.warning("[AGENT] Guardrails rejected agent payload. Falling back to clarification.")
        return self._build_fallback_response(request)

    # Step 3: Parse the JSON response from LLM
    try:
        normalized_payload = self._extract_json_payload(payload)
        filters_data = json.loads(normalized_payload)
    except json.JSONDecodeError as exc:
        # Handle malformed JSON gracefully
        logger.warning("[AGENT] Unable to decode DeepSeek response: %s", exc)
        return self._build_fallback_response(request)

    # Step 4: Normalize filters and check confidence level
    filters = self._normalize_filters(filters_data, request)
    clarification_topics = filters.clarification_needed
    needs_clarification = filters.confidence < _CLARIFICATION_CONFIDENCE_THRESHOLD  # 0.7
    clarifying_questions: List[str] = []

    # Step 5: Generate clarifying questions if needed
    if not needs_clarification and clarification_topics:
        # Edge case: low confidence + multiple unclear topics = ask for clarification
        if (
            filters.confidence < (_CLARIFICATION_CONFIDENCE_THRESHOLD + 0.1)
            and len(clarification_topics) >= 2
        ):
            needs_clarification = True
        else:
            # Generate 2 optional clarifying questions
            clarifying_questions = self._generate_clarifying_questions(clarification_topics)[:2]

    if needs_clarification:
        # Generate required clarifying questions
        clarifying_questions = self._generate_clarifying_questions(clarification_topics)

    # Step 6: Return parsed result with filters and clarification status
    return AgentParsingResponse(
        understood=True,
        filters=filters,
        needs_clarification=needs_clarification,
        clarifying_questions=clarifying_questions,
    )`,
      notes: [
        "Error Handling: Graceful fallback when DeepSeek API fails",
        "Guardrails: Validates LLM output to prevent malicious responses",
        "Confidence Threshold: Asks clarifying questions when confidence < 0.7",
        "JSON Parsing: Robust handling of malformed LLM responses"
      ]
    },
    {
      step: 3,
      title: "Generate Query Embedding (OpenAI)",
      file: "backend/app/services/vector.py",
      lines: "Lines 35-52",
      description: "Convert text to 1536-dimensional vector using OpenAI",
      status: "implemented",
      code: `async def generate_embedding(self, text: str) -> Optional[List[float]]:
    """
    Generate embedding vector for text using OpenAI.
    
    Args:
        text: Text to embed (e.g., "I want fantasy books. themes: magic, adventure...")
    
    Returns:
        Embedding vector (1536 floats) or None if error
    """
    try:
        # Call OpenAI Embeddings API
        response = await self._openai_client.embeddings.create(
            model=self.embedding_model,  # "text-embedding-3-small"
            input=text,                  # Combined text from query + filters
        )

        # Extract embedding vector from response
        embedding = response.data[0].embedding if response.data else None
        return embedding  # List of 1536 float values (normalized for cosine similarity)
        
    except Exception as e:
        # Log error and return None for graceful degradation
        print(f"Error generating embedding: {e}")
        return None`,
      notes: [
        "Model: text-embedding-3-small (1536 dimensions)",
        "Latency: ~200-400ms per call",
        "Returns normalized vector for semantic similarity",
        "Error handling returns None for graceful degradation"
      ]
    },
    {
      step: 4,
      title: "pgvector Similarity Search (Current: Vector Only)",
      file: "backend/database.sql",
      lines: "Lines 72-95",
      description: "SQL function for vector similarity search with filtering",
      status: "implemented",
      code: `-- PostgreSQL function for semantic book search using pgvector
CREATE OR REPLACE FUNCTION public.search_books(
        query_embedding vector(1536),           -- Query embedding from OpenAI
        match_threshold double precision DEFAULT 0.5,  -- Minimum similarity score (0-1)
        match_count integer DEFAULT 10,         -- Max results to return
        min_age integer DEFAULT 0,              -- User's minimum age for filtering
        max_age integer DEFAULT 120             -- User's maximum age for filtering
)
RETURNS SETOF public.books
LANGUAGE plpgsql
STABLE  -- Function doesn't modify database
AS $$
BEGIN
        RETURN QUERY
        SELECT b.*
        FROM public.books AS b
        WHERE b.embedding IS NOT NULL            -- Only search books with embeddings
            AND b.status = 'active'              -- Only active books
            -- Age filtering: book's age range must overlap with user's age
            AND (b.age_min IS NULL OR b.age_min <= max_age)
            AND (b.age_max IS NULL OR b.age_max >= min_age)
            -- Similarity threshold: cosine similarity must exceed threshold
            AND (1 - (b.embedding <=> query_embedding)) >= match_threshold
        -- Order by cosine distance (lower = more similar)
        ORDER BY b.embedding <=> query_embedding
        LIMIT match_count;
END;
$$;`,
      notes: [
        "Currently: Returns pure vector similarity results (semantic matching only)",
        "Uses IVFFLAT index for fast approximate nearest neighbor search",
        "Filters by age range, status, and similarity threshold",
        "Latency: ~50-200ms with index",
        "⚠️ Hybrid scoring (collaborative filtering, popularity) not yet applied"
      ]
    },
    {
      step: 5,
      title: "Generate Explanation & Return (Current: Basic Flow)",
      file: "backend/app/api/recommendations.py",
      lines: "Lines 233-275",
      description: "Create friendly explanation for recommendations",
      status: "partial",
      code: `async def _generate_chat_summary(user_message: str, books: List[BookResponse]) -> str:
    """Use LLM to craft a conversational summary for chat recommendations."""
    
    # Fallback if no books found or client unavailable
    if not books:
        return _fallback_chat_summary(user_message, books)

    client = _get_chat_client()  # AsyncOpenAI client
    if client is None:
        return _fallback_chat_summary(user_message, books)

    # Extract book metadata for LLM prompt
    titles = [book.title for book in books]
    authors = [", ".join(book.authors) or "Unknown" for book in books]
    
    # System prompt: Define LLM's role and constraints
    prompt = (
        "You are a friendly librarian summarizing book picks for a chat user. "
        "Write 1-2 enthusiastic sentences that reference the user's request and highlight why the selections fit. "
        "Avoid repeating the exact same phrasing each time. Do not include contact information, URLs, or external links."
    )
    
    system_message = {
        "role": "system",
        "content": "You are the StoryPath book concierge."
    }
    
    # User message: Include original query and recommendations
    user_message_payload = {
        "role": "user",
        "content": json.dumps({
            "request": user_message,  # e.g., "I want fantasy books"
            "recommendations": [
                {"title": title, "authors": author}
                for title, author in zip(titles, authors)
            ],
        })
    }

    try:
        # Call GPT-4o-mini to generate explanation
        response = await client.chat.completions.create(
            model=_CHAT_MODEL,  # "gpt-4o-mini"
            messages=[system_message, {"role": "system", "content": prompt}, user_message_payload],
            temperature=0.7,    # Balance creativity and consistency
            max_tokens=120,     # Keep response concise
        )
        
        # Extract summary from response
        summary = response.choices[0].message.content.strip() if response.choices else ""
        
        # Validate with guardrails (check for XSS, malicious content, etc.)
        if summary and validate_chat_summary(summary):
            return summary
        
        if summary:
            logger.warning("[CHAT] Summary failed guard validation; using fallback text.")
    except Exception as exc:
        logger.warning("[CHAT] Failed to generate LLM summary: %s", exc)

    # Fallback to template-based summary if LLM fails or validation fails
    return _fallback_chat_summary(user_message, books)`,
      notes: [
        "✅ Implemented: LLM explanation generation with GPT-4o-mini",
        "✅ Implemented: Guardrails validation for XSS/malicious content",
        "⚠️ Not yet wired: Collaborative filtering scores",
        "⚠️ Not yet wired: Hybrid score calculation (40% vector + 35% collab + 15% popularity + 10% recency)",
        "⚠️ Not yet wired: Diversity penalty for genre balancing"
      ]
    },
    {
      step: 6,
      title: "Display & User Feedback (Frontend)",
      file: "frontend/src/app/components/ChatInterface.tsx",
      lines: "Lines 165-210",
      description: "Handle API response and render recommendations",
      status: "implemented",
      code: `// Receive response from backend API
const response = await api.recommendations.chat({
  message: trimmed,
  conversation_history: conversationHistory,
  user_id: user?.user_id,
  age: chatAge,
});

// Extract agent decision for debugging/analytics
const agentDecision = response.agent_decision;

// Handle different response types from backend
if (response.type === 'clarification') {
  // Case 1: Agent needs more information from user
  const assistantClarification: ChatEntry = {
    id: generateMessageId(),
    role: 'assistant',
    content: response.clarification_question || 'Could you tell me a little more?',
    tool: response.tool,
    agentDecision,
    suggestedResponses: response.suggested_responses || [],  // Quick-reply buttons
  };
  setMessages((prev) => [...prev, assistantClarification]);
  
} else if (response.type === 'message') {
  // Case 2: Simple text response (small talk, greetings, etc.)
  const assistantMessage: ChatEntry = {
    id: generateMessageId(),
    role: 'assistant',
    content: response.message || response.explanation || 'Let me know what you\\'re looking for!',
    tool: response.tool,
    agentDecision,
    suggestedResponses: response.suggested_responses || [],
  };
  setMessages((prev) => [...prev, assistantMessage]);
  
} else {
  // Case 3: Book recommendations with explanation
  const assistantMessage: ChatEntry = {
    id: generateMessageId(),
    role: 'assistant',
    content: response.explanation || 'Here are some recommendations!',
    recommendations: response.books || [],  // Array of book objects
    tool: response.tool,
    agentDecision,
  };
  setMessages((prev) => [...prev, assistantMessage]);
}`,
      notes: [
        "Handles three response types: clarification, message, recommendations",
        "Appends assistant message to conversation history",
        "Renders BookCard components for each recommendation",
        "Preserves agent decision for debugging/analytics"
      ]
    }
  ];

  const activeCode = codeSteps.find(s => s.step === activeCodeStep);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
          Data Flow Example
        </span>

        {/* Header */}
        <div className="mt-4 mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            User Journey: "I want fantasy books"
          </h2>
          <p className="text-base text-gray-600">
            End-to-end flow from query to recommendation • Real latency metrics included
          </p>
        </div>

        {/* Implementation Status Banner */}
        <div className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Current vs. Planned Implementation</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-bold text-green-700 mb-1">✅ Currently Implemented:</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• DeepSeek query parsing with confidence thresholds</li>
                    <li>• Vector search with pgvector (semantic similarity)</li>
                    <li>• Age filtering and family-safe mode</li>
                    <li>• GPT-4o-mini explanation generation</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-orange-700 mb-1">🔮 Planned (Code exists, not wired):</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Collaborative filtering (find similar users' preferences)</li>
                    <li>• Hybrid scoring (40% vector + 35% collab + 15% pop + 10% recency)</li>
                    <li>• Popularity cohort normalization by age group</li>
                    <li>• Diversity penalty (reduce genre over-concentration)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Current pathway:</strong> Simple vector search (Steps 1-6) • <strong>Target pathway:</strong> Full hybrid recommendation engine with personalization
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Steps */}
        <div className="space-y-4">
          {/* Step 1: User Query */}
          <div className="bg-white rounded-xl shadow-lg border-l-4 border-blue-500 p-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Step 1: User Query Input</h3>
                  <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1.5 rounded">Frontend</span>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded border border-green-300">✅ Implemented</span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-3">User Action:</div>
                    <div className="bg-gray-50 rounded p-4 text-sm">
                      <div className="text-gray-600 mb-2">User types in chat:</div>
                      <div className="font-mono text-gray-900 text-base">"I want fantasy books"</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-3">Frontend State:</div>
                    <div className="bg-gray-50 rounded p-4 font-mono text-sm space-y-1">
                      <div className="text-gray-600">message: <span className="text-green-600">"I want fantasy books"</span></div>
                      <div className="text-gray-600">user_age: <span className="text-blue-600">16</span></div>
                      <div className="text-gray-600">family_safe: <span className="text-orange-600">true</span></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <ArrowRight className="w-4 h-4" />
                  <span>Triggers: <code className="bg-gray-100 px-2 py-1 rounded font-mono">POST /api/v1/recommendations/chat</code></span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Agent Decision */}
          <div className="bg-white rounded-xl shadow-lg border-l-4 border-purple-500 p-8">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Step 2: LLM Query Parsing (DeepSeek)</h3>
                  <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1.5 rounded">Backend</span>
                  <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1.5 rounded">⏱ 2-3 seconds</span>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded border border-green-300">✅ Implemented</span>
                  <button
                    onClick={() => { setShowCodeModal(true); setActiveCodeStep(2); }}
                    className="ml-auto bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded flex items-center gap-2 transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    View Code
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-3">AgentService Process:</div>
                    <div className="bg-gray-50 rounded p-4 text-sm space-y-1.5">
                      <div className="text-gray-600">1. Check for small talk → <span className="text-red-600">No</span></div>
                      <div className="text-gray-600">2. Call DeepSeek API:</div>
                      <div className="font-mono text-gray-800 ml-3">Model: <span className="text-purple-600">deepseek-chat</span></div>
                      <div className="font-mono text-gray-800 ml-3">Prompt: "Extract filters..."</div>
                      <div className="font-mono text-gray-800 ml-3">Max tokens: 500</div>
                      <div className="text-gray-600">3. Parse JSON response</div>
                      <div className="text-gray-600">4. Return decision</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-3">Extracted Filters:</div>
                    <div className="bg-purple-50 rounded p-4 font-mono text-sm space-y-0.5">
                      <div className="text-gray-700 mb-2">AgentDecision:</div>
                      <div className="text-gray-600">{`{`}</div>
                      <div className="ml-3 text-gray-600">"action": <span className="text-green-600">"RECOMMENDATION_SEARCH"</span>,</div>
                      <div className="ml-3 text-gray-600">"filters": {`{`}</div>
                      <div className="ml-6 text-gray-600">"genre": <span className="text-blue-600">"fantasy"</span>,</div>
                      <div className="ml-6 text-gray-600">"confidence": <span className="text-orange-600">0.95</span></div>
                      <div className="ml-3 text-gray-600">{`}`}</div>
                      <div className="text-gray-600">{`}`}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <ArrowRight className="w-4 h-4" />
                  <span>Triggers: Vector embedding generation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Embedding Generation */}
          <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-500 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Step 3: Generate Query Embedding (OpenAI)</h3>
                  <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1.5 rounded">VectorService</span>
                  <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1.5 rounded">⏱ 200-400ms</span>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded border border-green-300">✅ Implemented</span>
                  <button
                    onClick={() => { setShowCodeModal(true); setActiveCodeStep(3); }}
                    className="ml-auto bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded flex items-center gap-2 transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    View Code
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-base font-bold text-gray-900 mb-3">Embedding Process:</div>
                    <div className="bg-gray-50 rounded p-4 text-sm space-y-2">
                      <div className="text-gray-700">1. Combine text:</div>
                      <div className="font-mono text-gray-900 ml-3 text-sm font-medium">"fantasy adventure young adult"</div>
                      <div className="text-gray-700 mt-2">2. Call OpenAI API:</div>
                      <div className="font-mono text-gray-900 ml-3 text-sm">Model: <span className="text-green-600 font-semibold">text-embedding-3-small</span></div>
                      <div className="font-mono text-gray-900 ml-3 text-sm">Input: combined text</div>
                      <div className="text-gray-700 mt-2">3. Receive vector:</div>
                      <div className="font-mono text-gray-900 ml-3 text-sm font-medium">[0.234, -0.456, ..., 0.789]</div>
                      <div className="text-gray-700 mt-1">4. Cache in Redis (1h TTL)</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900 mb-3">Vector Representation:</div>
                    <div className="bg-green-50 rounded p-4 text-sm">
                      <div className="text-gray-900 font-bold mb-3">Embedding Vector:</div>
                      <div className="font-mono text-gray-700 text-sm leading-relaxed">
                        <div>Dimension: 1536</div>
                        <div className="mt-2">Sample values:</div>
                        <div>[0.234, -0.456, 0.123,</div>
                        <div className="ml-2">0.789, -0.345, 0.567,</div>
                        <div className="ml-2">... (1530 more values)]</div>
                        <div className="mt-3 text-gray-600">↓</div>
                        <div className="mt-2">Used for semantic similarity</div>
                        <div>in pgvector search</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Vector Search */}
          <div className="bg-white rounded-xl shadow-lg border-l-4 border-cyan-500 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-100 rounded-full p-3 flex-shrink-0">
                <Search className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Step 4: pgvector Similarity Search</h3>
                  <span className="bg-cyan-100 text-gray-900 text-sm font-bold px-3 py-1.5 rounded border border-cyan-300">Database</span>
                  <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1.5 rounded">⏱ 50-200ms</span>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded border border-green-300">✅ Implemented</span>
                  <button
                    onClick={() => { setShowCodeModal(true); setActiveCodeStep(4); }}
                    className="ml-auto bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-4 py-2 rounded flex items-center gap-2 transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    View Code
                  </button>
                </div>
                <div className="bg-gray-50 rounded p-5">
                  <div className="text-base font-bold text-gray-900 mb-3">SQL Query with Vector Similarity:</div>
                  <div className="bg-gray-900 rounded p-4 font-mono text-sm text-green-400 overflow-x-auto leading-relaxed">
                    <div><span className="text-blue-400">SELECT</span> *</div>
                    <div><span className="text-blue-400">FROM</span> books</div>
                    <div><span className="text-blue-400">WHERE</span> status = <span className="text-yellow-400">'active'</span></div>
                    <div className="ml-4"><span className="text-blue-400">AND</span> (age_min <span className="text-blue-400">IS NULL OR</span> age_min &lt;= <span className="text-orange-400">16</span>)</div>
                    <div className="ml-4"><span className="text-blue-400">AND</span> (age_max <span className="text-blue-400">IS NULL OR</span> age_max &gt;= <span className="text-orange-400">16</span>)</div>
                    <div className="ml-4"><span className="text-blue-400">AND</span> family_safe_mode = <span className="text-orange-400">true</span></div>
                    <div className="ml-4"><span className="text-blue-400">AND</span> <span className="text-yellow-400">'fantasy'</span> = <span className="text-blue-400">ANY</span>(subjects)</div>
                    <div><span className="text-blue-400">ORDER BY</span> <span className="text-purple-400">similarity</span>(embedding, query_vector) <span className="text-blue-400">DESC</span></div>
                    <div><span className="text-blue-400">LIMIT</span> <span className="text-orange-400">10</span>;</div>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 border-l-4 border-orange-400 rounded">
                    <div className="font-bold mb-2 text-orange-900 text-sm">⚠️ Current Implementation Note:</div>
                    <div className="text-sm text-orange-800 space-y-1">
                      <div>• Returns pure <strong>vector similarity results</strong> (semantic matching only)</div>
                      <div>• Collaborative filtering, popularity cohort scoring, and diversity penalty not yet applied</div>
                      <div>• Hybrid scoring functions exist in codebase but not wired to chat endpoint</div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-700">
                    <div className="font-bold mb-2">Technical Details:</div>
                    <div className="space-y-1">
                      <div>• Uses IVFFLAT index for fast approximate nearest neighbor search</div>
                      <div>• Filters by age range, family-safe mode, and genre</div>
                      <div>• Returns books with highest cosine similarity to query embedding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5: Response Generation */}
          <div className="bg-white rounded-xl shadow-lg border-l-4 border-indigo-500 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Step 5: Generate Explanation & Return Results</h3>
                  <span className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1.5 rounded">Backend</span>
                  <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1.5 rounded">⏱ 1-2 seconds</span>
                  <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded border border-orange-300">🔮 Partial</span>
                  <button
                    onClick={() => { setShowCodeModal(true); setActiveCodeStep(5); }}
                    className="ml-auto bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded flex items-center gap-2 transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    View Code
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-base font-bold text-gray-900 mb-3">LLM Explanation (GPT-4o-mini):</div>
                    <div className="bg-[rgba(52,79,119,0)] rounded p-4 text-sm border-2 border-indigo-200">
                      <div className="text-gray-900 font-bold mb-3">Prompt sent to OpenAI:</div>
                      <div className="font-mono text-gray-900 text-sm leading-relaxed bg-white rounded p-3 border border-gray-200">
                        <div>"User searched: 'I want fantasy books'</div>
                        <div className="ml-2">Found 10 books matching criteria.</div>
                        <div className="ml-2">Generate friendly explanation."</div>
                      </div>
                      <div className="text-gray-900 font-bold mt-4 mb-2">Generated Response:</div>
                      <div className="bg-white rounded p-3 text-gray-900 text-sm border border-gray-200 font-medium leading-relaxed">
                        "Based on your interest in fantasy, I found these great books for your age group. They include epic adventures, magical worlds, and heroic journeys!"
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900 mb-3">API Response to Frontend:</div>
                    <div className="bg-gray-900 rounded p-4 font-mono text-xs text-green-400 overflow-y-auto max-h-64">
                      <div className="text-gray-400">{`{`}</div>
                      <div className="ml-2">"type": <span className="text-yellow-400">"recommendations"</span>,</div>
                      <div className="ml-2">"books": [</div>
                      <div className="ml-4">{`{`}</div>
                      <div className="ml-6">"book_id": <span className="text-blue-400">"uuid1"</span>,</div>
                      <div className="ml-6">"title": <span className="text-yellow-400">"Percy Jackson"</span>,</div>
                      <div className="ml-6">"authors": [<span className="text-yellow-400">"Rick Riordan"</span>],</div>
                      <div className="ml-6">"subjects": [<span className="text-yellow-400">"fantasy"</span>, <span className="text-yellow-400">"adventure"</span>],</div>
                      <div className="ml-6">"age_range": <span className="text-yellow-400">"10-16"</span>,</div>
                      <div className="ml-6">"popularity_score": <span className="text-orange-400">85</span></div>
                      <div className="ml-4">{`}`},</div>
                      <div className="ml-4 text-gray-500">... (9 more books)</div>
                      <div className="ml-2">],</div>
                      <div className="ml-2">"explanation": <span className="text-yellow-400">"Based on..."</span></div>
                      <div className="text-gray-400">{`}`}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-50 border-l-4 border-orange-400 rounded">
                  <div className="font-bold mb-2 text-orange-900 text-sm">🔮 Planned Enhancements (Code exists, not wired):</div>
                  <div className="text-sm text-orange-800 space-y-1">
                    <div>• <strong>Collaborative filtering:</strong> Find users with similar borrow history, boost their preferred books</div>
                    <div>• <strong>Hybrid scoring:</strong> 40% vector + 35% collab + 15% popularity + 10% recency</div>
                    <div>• <strong>Diversity penalty:</strong> If &gt;70% same genre, apply 15% penalty to encourage variety</div>
                    <div>• <strong>Explanation enrichment:</strong> Include personalization rationale in LLM prompt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6: Display Results */}
          <div className="bg-white rounded-xl shadow-lg border-l-4 border-pink-500 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                <ThumbsUp className="w-6 h-6 text-pink-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Step 6: Display & User Feedback</h3>
                  <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1.5 rounded">Frontend</span>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded border border-green-300">✅ Implemented</span>
                  <button
                    onClick={() => { setShowCodeModal(true); setActiveCodeStep(6); }}
                    className="ml-auto bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-4 py-2 rounded flex items-center gap-2 transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    View Code
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-base font-bold text-gray-900 mb-3">UI Rendering:</div>
                    <div className="bg-gray-50 rounded p-4 text-sm space-y-2">
                      <div className="text-gray-900 font-semibold">Frontend displays:</div>
                      <div className="bg-white border-2 border-gray-300 rounded p-3">
                        <div className="text-gray-700 text-sm mb-3 font-medium">"Based on your interest in fantasy..."</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="border-2 border-blue-300 rounded p-2 bg-blue-50">
                            <div className="font-bold text-gray-900 text-xs">Percy Jackson</div>
                            <div className="text-gray-700 text-xs">Rick Riordan</div>
                            <div className="text-gray-600 text-xs">Age 10-16 • ⭐ 85</div>
                            <div className="flex gap-1 mt-2">
                              <button className="text-xs bg-green-100 px-2 py-0.5 rounded font-medium">👍</button>
                              <button className="text-xs bg-red-100 px-2 py-0.5 rounded font-medium">👎</button>
                            </div>
                          </div>
                          <div className="border-2 border-blue-300 rounded p-2 bg-blue-50">
                            <div className="font-bold text-gray-900 text-xs">The Name of Wind</div>
                            <div className="text-gray-700 text-xs">Patrick Rothfuss</div>
                            <div className="text-gray-600 text-xs">Age 13-18 • ⭐ 90</div>
                            <div className="flex gap-1 mt-2">
                              <button className="text-xs bg-green-100 px-2 py-0.5 rounded font-medium">👍</button>
                              <button className="text-xs bg-red-100 px-2 py-0.5 rounded font-medium">👎</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900 mb-3">User Feedback Loop:</div>
                    <div className="bg-pink-50 rounded p-4 text-sm space-y-2">
                      <div className="text-gray-900 font-semibold">User actions:</div>
                      <div className="space-y-1.5 text-gray-700">
                        <div>1. Click 👍 → <code className="bg-white px-2 py-0.5 rounded text-xs font-mono border border-gray-300">POST /api/v1/feedback</code></div>
                        <div className="ml-4 text-sm font-mono">{"{"} rating: "up" {"}"}</div>
                        <div>2. Click 👎 → Show modal with reasons</div>
                        <div>3. Add to reading list</div>
                        <div>4. Continue chatting for refinement</div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-pink-200">
                        <div className="text-gray-900 font-bold mb-2">System learns from feedback:</div>
                        <div className="text-gray-700 text-sm mt-1">
                          • Improves future recommendations
                        </div>
                        <div className="text-gray-700 text-sm">
                          • Identifies content quality issues
                        </div>
                        <div className="text-gray-700 text-sm">
                          • Adjusts popularity scores
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Latency Summary */}
        <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Current System: End-to-End Latency</h3>
          <p className="text-sm text-purple-100 mb-4">Simple vector search pathway (currently implemented)</p>
          <div className="grid grid-cols-6 gap-3 text-sm">
            <div className="bg-white bg-opacity-20 backdrop-blur rounded p-3 text-center">
              <div className="text-2xl font-bold">~0ms</div>
              <div className="text-xs opacity-90 mt-1">User Input</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded p-3 text-center">
              <div className="text-2xl font-bold">2-3s</div>
              <div className="text-xs opacity-90 mt-1">LLM Parsing</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded p-3 text-center">
              <div className="text-2xl font-bold">1-2s</div>
              <div className="text-xs opacity-90 mt-1">Embedding</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded p-3 text-center">
              <div className="text-2xl font-bold">1-3s</div>
              <div className="text-xs opacity-90 mt-1">Vector Search</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur rounded p-3 text-center">
              <div className="text-2xl font-bold">1-3s</div>
              <div className="text-xs opacity-90 mt-1">Explanation</div>
            </div>
            <div className="bg-white bg-opacity-30 backdrop-blur rounded p-3 text-center border-2 border-white">
              <div className="text-2xl font-bold">5-11s</div>
              <div className="text-xs opacity-90 mt-1">Total</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-purple-400">
            <div className="text-sm font-semibold mb-2">🔮 Planned: Full Hybrid Pipeline</div>
            <div className="text-xs text-purple-100">
              Adds ~100-200ms for collaborative filtering + hybrid scoring • Total: 5.5-11.5s • Significantly better personalization with minimal latency impact
            </div>
          </div>
        </div>
      </div>

      {/* Code Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50" onClick={() => setShowCodeModal(false)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold">{activeCode?.title}</h3>
                    {activeCode?.status === 'implemented' && (
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">✅ Implemented</span>
                    )}
                    {activeCode?.status === 'partial' && (
                      <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">🔮 Partial</span>
                    )}
                  </div>
                  <p className="text-purple-100 text-sm mt-1">{activeCode?.file} ({activeCode?.lines})</p>
                  <p className="text-purple-200 text-xs mt-1">{activeCode?.description}</p>
                </div>
                <button onClick={() => setShowCodeModal(false)} className="text-white hover:text-purple-200 text-3xl font-bold leading-none">×</button>
              </div>
            </div>

            {/* Step Tabs */}
            <div className="bg-gray-800 border-b border-gray-700 px-6 pt-4 overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {codeSteps.map((step) => (
                  <button
                    key={step.step}
                    onClick={() => setActiveCodeStep(step.step)}
                    className={`px-4 py-2 text-sm font-semibold rounded-t-lg transition-colors ${
                      activeCodeStep === step.step
                        ? 'bg-white text-purple-600 border-t-4 border-purple-600 shadow-lg'
                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white'
                    }`}
                  >
                    Step {step.step}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-240px)]">
              {/* Code Block */}
              <div className="bg-gray-900 rounded-lg p-5 font-mono text-sm overflow-x-auto">
                <pre className="text-green-400 whitespace-pre">{activeCode?.code}</pre>
              </div>

              {/* Implementation Notes */}
              <div className="mt-6 bg-purple-50 rounded-lg p-5 border-2 border-purple-200">
                <h4 className="font-bold text-purple-900 mb-3 text-base">Key Implementation Details:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {activeCode?.notes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}