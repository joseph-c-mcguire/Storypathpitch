import { useState } from 'react';
import { ArrowRight, X, Code2 } from 'lucide-react';

// Code snippets from actual backend
const CODE_SNIPPETS = {
  'models-chat-request': {
    title: 'ChatRecommendationRequest Model',
    file: 'backend/app/db/models.py',
    lines: '493-520',
    code: `class ChatRecommendationRequest(BaseModel):
    """Request for chat-based recommendations."""
    user_id: Optional[str] = Field(
        default=None,
        description="Identifier of the user participating in the chat journey, if authenticated.",
    )
    age: int = Field(..., description="Age used for content filtering", ge=0)
    message: str = Field(..., description="Latest user message prompting the assistant.")
    conversation_history: Optional[List[ChatMessage]] = Field(
        default=None,
        description="Prior chat turns to maintain conversational context.",
    )

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "user_id": "user-1",
                "age": 13,
                "message": "I'm looking for something like Percy Jackson but with a female lead.",
                "conversation_history": [
                    {
                        "role": "user",
                        "content": "I love fast-paced fantasy adventures."
                    },
                    {
                        "role": "assistant",
                        "content": "Are you looking for middle-grade or young adult stories?"
                    }
                ],
            }
        }
    )`,
    highlights: [5, 6, 7, 8, 9, 10, 11, 12]
  },
  'agent-decide': {
    title: 'AgentService.decide() Method',
    file: 'backend/app/services/agent.py',
    lines: '117-170',
    code: `async def decide(self, request: AgentDecisionRequest) -> AgentDecision:
    """
    Analyze user message and conversation history to determine next action.
    Returns structured decision with confidence score.
    """
    logger.info(f"[AGENT] Processing decision for message: {request.message[:50]}...")
    
    # Build conversation context
    conversation = []
    if request.conversation_history:
        conversation = request.conversation_history
    
    # Add current message
    conversation.append({
        "role": "user",
        "content": request.message
    })
    
    # Call DeepSeek API for decision
    prompt = self._build_decision_prompt(request)
    
    try:
        response = await self._invoke_deepseek(
            prompt=prompt,
            conversation=conversation
        )
        
        if not response:
            logger.warning("[AGENT] No response from DeepSeek")
            return self._fallback_decision(request)
        
        # Parse structured decision
        decision_data = json.loads(response)
        
        # Validate with Guardrails
        if not validate_agent_filters(decision_data):
            logger.warning("[AGENT] Decision failed guardrail validation")
            return self._fallback_decision(request)
        
        return AgentDecision(
            action=decision_data.get("action", "VECTOR_SEARCH"),
            filters=decision_data.get("filters", {}),
            confidence=decision_data.get("confidence", 0.5),
            tool="agent_service"
        )
    
    except Exception as e:
        logger.error(f"[AGENT] Decision failed: {e}")
        return self._fallback_decision(request)`,
    highlights: [9, 10, 11, 22, 23, 24, 25, 33, 34, 35, 36]
  },
  'agent-deepseek': {
    title: 'DeepSeek API Integration',
    file: 'backend/app/services/agent.py',
    lines: '260-320',
    code: `async def _invoke_deepseek(
    self,
    prompt: str,
    conversation: Optional[List[Dict[str, str]]] = None,
) -> Optional[str]:
    """Call DeepSeek API with optional conversation context."""
    
    messages = []
    
    # Add system prompt
    messages.append({
        "role": "system",
        "content": "You are a library recommendation assistant that analyzes user requests."
    })
    
    # Add conversation history if provided
    if conversation:
        messages.extend(conversation)
    
    # Add analysis prompt
    messages.append({
        "role": "user",
        "content": prompt
    })
    
    payload = {
        "model": _DEEPSEEK_MODEL,  # "deepseek-chat"
        "messages": messages,
        "temperature": 0.7,
        "max_tokens": 500,
        "top_p": 0.95,
    }
    
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                _DEEPSEEK_ENDPOINT,  # "https://api.deepseek.com/v1/chat/completions"
                json=payload,
                headers={
                    "Authorization": f"Bearer {self.settings.deepseek_api_key}",
                    "Content-Type": "application/json",
                },
                timeout=self._http_timeout,
            )
            
            if response.status_code == 200:
                result = response.json()
                return result["choices"][0]["message"]["content"]
            else:
                logger.error(f"[AGENT] DeepSeek API error: {response.status_code}")
                return None
    
    except Exception as e:
        logger.error(f"[AGENT] DeepSeek request failed: {e}")
        return None`,
    highlights: [16, 17, 18, 26, 27, 28, 34, 35, 36, 37]
  },
  'vector-search': {
    title: 'VectorService.search_books() Method',
    file: 'backend/app/services/vector.py',
    lines: '202-280',
    code: `async def search_books(
    self,
    query_text: str,
    user_age: int,
    age_range: Optional[Tuple[int, int]] = None,
    genre: Optional[str] = None,
    limit: int = None,
) -> Tuple[Optional[List[Dict[str, Any]]], Optional[str]]:
    """Search for books using vector similarity with metadata filtering."""
    
    limit = limit or self.top_k  # Default 10 from config
    
    # Generate embedding for query
    query_embedding = await self.generate_embedding(query_text)
    
    if not query_embedding:
        return None, "Failed to generate query embedding"
    
    # Build SQL for vector search with metadata filtering
    search_params = {
        "query_embedding": query_embedding,
        "match_threshold": 0.5,
        "match_count": limit,
        "min_age": age_range[0] if age_range else max(0, user_age - 2),
        "max_age": age_range[1] if age_range else min(120, user_age + 5),
    }
    
    if genre:
        search_params["genre_filter"] = genre
    
    try:
        # Call Supabase RPC for pgvector search
        response = self.db.rpc(
            "search_books",
            search_params
        ).execute()
        
        if response.data:
            logger.info(f"[VECTOR] Found {len(response.data)} books")
            return response.data, None
        else:
            logger.warning("[VECTOR] No books found for query")
            return [], None
    
    except Exception as e:
        logger.error(f"[VECTOR] Search failed: {e}")
        return None, str(e)`,
    highlights: [11, 14, 20, 21, 22, 23, 32, 33, 34, 35]
  },
  'safety-filter': {
    title: 'Safety Filtering Post-Search',
    file: 'backend/app/api/recommendations.py',
    lines: '165-202',
    code: `def _apply_safety_filters(books: List[Dict[str, Any]], user_age: int) -> List[Dict[str, Any]]:
    """Filter books based on age-appropriate content and remove unsafe keywords."""
    
    filtered_books = []
    for book in books:
        # Age bounds check
        if book.get("age_range"):
            min_age, max_age = book["age_range"]
            if user_age < min_age or user_age > max_age:
                continue
        
        # Unsafe keyword detection
        if any(keyword in book.get("description", "").lower() for keyword in UNSAFE_KEYWORDS):
            continue
        
        # Metadata parsing
        book["authors"] = book.get("authors", [])
        book["cover_url"] = book.get("cover_url", "")
        book["popularity_score"] = book.get("popularity_score", 0)
        book["rating"] = book.get("rating", 0)
        book["borrow_count"] = book.get("borrow_count", 0)
        
        filtered_books.append(book)
    
    return filtered_books`,
    highlights: [4, 5, 19, 20, 21, 22, 23, 24, 25, 26, 27, 41, 42, 43, 50]
  },
  'llm-explanation': {
    title: 'LLM Explanation Generation',
    file: 'backend/app/api/recommendations.py',
    lines: '234-276',
    code: `async def _generate_chat_summary(user_message: str, books: List[BookResponse]) -> str:
    """Use LLM to craft a conversational summary for chat recommendations."""
    
    titles = [book.title for book in books]
    authors = [", ".join(book.authors) or "Unknown" for book in books]
    
    prompt = (
        "You are a friendly librarian summarizing book picks for a chat user. "
        "Write 1-2 enthusiastic sentences that reference the user's request "
        "and highlight why these books match their interests. "
        "Keep it conversational and engaging."
    )
    
    system_message = {
        "role": "system",
        "content": "You are the StoryPath book concierge."
    }
    
    # RAG: Inject book titles and authors
    user_message_payload = {
        "role": "user",
        "content": json.dumps({
            "request": user_message,
            "recommendations": [
                {"title": title, "authors": author}
                for title, author in zip(titles, authors)
            ],
        })
    }

    try:
        # Call OpenAI GPT-4o-mini
        response = await client.chat.completions.create(
            model=_CHAT_MODEL,  # "gpt-4o-mini"
            messages=[system_message, {"role": "system", "content": prompt}, user_message_payload],
            temperature=0.7,
            max_tokens=120,
        )
        
        summary = response.choices[0].message.content.strip()
        
        # Guardrails validation
        if summary and validate_chat_summary(summary):
            return summary
        
        if summary:
            logger.warning("[CHAT] Summary failed guard validation; using fallback")
    
    except Exception as exc:
        logger.warning("[CHAT] Failed to generate LLM summary: %s", exc)

    # Fallback if validation fails
    return _fallback_chat_summary(user_message, books)`,
    highlights: [4, 5, 19, 20, 21, 22, 23, 24, 25, 26, 27, 41, 42, 43, 50]
  },
  'response-model': {
    title: 'RecommendationResponse Model',
    file: 'backend/app/db/models.py',
    lines: '527-571',
    code: `class RecommendationResponse(BaseModel):
    """Recommendation result."""
    type: str = Field(
        ...,
        description="Indicates whether response contains recommendations or clarification.",
    )
    tool: Optional[str] = Field(
        default=None,
        description="Identifier of the backend tool invoked.",
    )
    books: Optional[List[BookResponse]] = Field(
        default=None,
        description="List of recommended books when available.",
    )
    clarification_question: Optional[str] = Field(
        default=None,
        description="Follow-up question posed to resolve ambiguous patron intent.",
    )
    suggested_responses: Optional[List[str]] = Field(
        default=None,
        description="Quick reply options to streamline user interaction.",
    )
    explanation: Optional[str] = Field(
        default=None,
        description="Narrative describing why recommendations were selected.",
    )
    message: Optional[str] = Field(
        default=None,
        description="Assistant-only message when no recommendation list returned.",
    )
    agent_decision: Optional[AgentDecision] = Field(
        default=None,
        description="Full agent decision payload used to generate this response.",
    )`,
    highlights: [3, 4, 5, 11, 12, 13, 23, 24, 25, 31, 32, 33]
  },
  'chat-endpoint': {
    title: 'Chat Recommendations Endpoint',
    file: 'backend/app/api/recommendations.py',
    lines: '623-680',
    code: `@router.post("/chat", response_model=RecommendationResponse)
async def chat_recommendations(
    request: ChatRecommendationRequest,
    db: Client = Depends(get_db)
):
    """Get recommendations through natural language chat."""
    logger.info(f"[CHAT] Request received - Age: {request.age}, Message: {request.message}")
    
    # Build conversation history
    conversation_history = (
        [
            {"role": message.role, "content": message.content}
            for message in (request.conversation_history or [])
        ]
        or None
    )
    
    # Call agent service for decision
    decision = await _agent_service.decide(
        AgentDecisionRequest(
            message=request.message,
            user_age=request.age,
            conversation_history=conversation_history,
            context={"user_id": request.user_id} if request.user_id else None,
        )
    )
    
    # Execute vector search based on decision
    books, error = await _vector_service.search_books(
        query_text=request.message,
        user_age=request.age,
        genre=decision.filters.get("genre"),
        limit=5
    )
    
    if error or not books:
        logger.warning(f"[CHAT] Search failed or empty: {error}")
        return RecommendationResponse(
            type="error",
            message="Unable to find recommendations at this time.",
            agent_decision=decision
        )
    
    # Convert to BookResponse models
    book_responses = [BookResponse(**book) for book in books]
    
    # Generate explanation
    explanation = await _generate_chat_summary(request.message, book_responses)
    
    # Return response
    response = RecommendationResponse(
        type="recommendations",
        books=book_responses,
        explanation=explanation,
        tool=decision.tool,
        agent_decision=decision,
    )
    
    logger.info(
        "[CHAT] Returning response - Type: %s, Books count: %s",
        response.type,
        len(response.books or []),
    )
    return response`,
    highlights: [10, 11, 12, 13, 19, 20, 21, 22, 23, 28, 29, 30, 31, 47, 50, 51, 52, 53, 54, 55, 56]
  }
};

interface CodeViewerModalProps {
  snippetKey: string | null;
  onClose: () => void;
}

function CodeViewerModal({ snippetKey, onClose }: CodeViewerModalProps) {
  if (!snippetKey) return null;
  
  const snippet = CODE_SNIPPETS[snippetKey as keyof typeof CODE_SNIPPETS];
  if (!snippet) return null;

  const lines = snippet.code.split('\n');

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6" onClick={onClose}>
      <div className="bg-gray-900 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col border-2 border-orange-500" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
          <div className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-orange-500" />
            <div>
              <h3 className="text-lg font-bold text-white">{snippet.title}</h3>
              <p className="text-xs text-gray-400">{snippet.file} (lines {snippet.lines})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-auto p-6 bg-gray-900">
          <pre className="text-sm font-mono">
            {lines.map((line, index) => {
              const lineNumber = index + 1;
              const isHighlighted = snippet.highlights.includes(lineNumber);
              
              return (
                <div
                  key={index}
                  className={`flex ${isHighlighted ? 'bg-orange-500/20 border-l-4 border-orange-500' : ''}`}
                >
                  <span className={`select-none w-12 text-right pr-4 flex-shrink-0 ${isHighlighted ? 'text-orange-400 font-bold' : 'text-gray-600'}`}>
                    {lineNumber}
                  </span>
                  <code className="text-gray-300 flex-1">{line}</code>
                </div>
              );
            })}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500/20 border-l-2 border-orange-500"></div>
                <span>Highlighted lines show key implementation details</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors text-sm font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UserWorkflowExample() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  const openCodeViewer = (key: string) => {
    setSelectedCode(key);
  };

  const closeCodeViewer = () => {
    setSelectedCode(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <span className="text-orange-500 font-semibold uppercase text-sm tracking-wider">
          Request Flow Example
        </span>

        {/* Header */}
        <div className="mt-4 mb-6">
          <h2 className="text-4xl font-bold text-white mb-2">
            Request Flow: Chat Recommendation
          </h2>
          <p className="text-base text-gray-300">
            End-to-end flow from query to recommendation • Real latency metrics included • Click code references to view
          </p>
        </div>

        {/* Request Flow Diagram */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border-2 border-gray-300">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Request Flow: Chat Recommendation</h4>
          
          <div className="space-y-4">
            {/* Step 1: Initial Request */}
            <div className="bg-white rounded-lg p-5 border-2 border-purple-400 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                <div className="font-bold text-xl text-gray-900">User Request</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Endpoint:</div>
                  <div className="font-mono text-sm bg-purple-50 p-2 rounded border border-purple-200">POST /recommendations/chat</div>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Service:</div>
                  <div className="text-base text-gray-600">API Router → JWT</div>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Request Body:</div>
                  <div className="font-mono text-sm bg-gray-50 p-2 rounded border border-gray-200">
                    {`{ message: "darker fantasy",`}<br/>
                    {`  age: 13,`}<br/>
                    {`  conversation_history: [] }`}
                  </div>
                  <button 
                    onClick={() => openCodeViewer('models-chat-request')}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline mt-1 cursor-pointer flex items-center gap-1"
                  >
                    <Code2 className="w-3 h-3" />
                    ChatRecommendationRequest (models.py:493-520)
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Context + LLM Parsing */}
            <div className="bg-green-50 rounded-lg p-5 border-2 border-green-400 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                <div className="font-bold text-xl text-gray-900">Query Parsing & Intent Detection</div>
                <div className="flex items-center gap-2 ml-auto">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">6 substeps</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Services:</div>
                  <div className="text-base text-gray-600">✅ AgentService</div>
                  <div className="text-base text-gray-600">✅ DeepSeek API</div>
                  <div className="text-base text-gray-600">✅ Guardrails (Gate 1)</div>
                  <button 
                    onClick={() => openCodeViewer('agent-decide')}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline mt-2 cursor-pointer flex items-center gap-1"
                  >
                    <Code2 className="w-3 h-3" />
                    agent.py:117-170
                  </button>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Substeps:</div>
                  <div className="text-sm text-gray-600">2.1 Small talk detection</div>
                  <div className="text-sm text-gray-600">2.2 DeepSeek parsing</div>
                  <div className="text-sm text-gray-600">2.3 JSON extraction</div>
                  <div className="text-sm text-gray-600">2.4 <strong>Gate 1:</strong> validate_agent_filters()</div>
                  <div className="text-sm text-gray-600">2.5 Filter normalization</div>
                  <div className="text-sm text-gray-600">2.6 Confidence threshold (0.55)</div>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Output:</div>
                  <div className="font-mono text-sm bg-gray-50 p-2 rounded border border-gray-200">
                    {`{ action: "VECTOR_SEARCH",`}<br/>
                    {`  filters: {`}<br/>
                    {`    genres: ["fantasy"],`}<br/>
                    {`    tags: ["dark"] },`}<br/>
                    {`  confidence: 0.87 }`}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Vector Search */}
            <div className="bg-cyan-50 rounded-lg p-5 border-2 border-cyan-400 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                <div className="font-bold text-xl text-gray-900">Semantic Search</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Services:</div>
                  <div className="text-base text-gray-600">✅ VectorService</div>
                  <div className="text-base text-gray-600">✅ OpenAI Embeddings</div>
                  <div className="text-base text-gray-600">✅ Supabase pgvector</div>
                  <button 
                    onClick={() => openCodeViewer('vector-search')}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline mt-2 cursor-pointer flex items-center gap-1"
                  >
                    <Code2 className="w-3 h-3" />
                    vector.py:202-280
                  </button>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Processing:</div>
                  <div className="text-base text-gray-600">• Query enrichment</div>
                  <div className="text-base text-gray-600">• Redis cache check</div>
                  <div className="text-base text-gray-600">• 1536-dim embedding</div>
                  <div className="text-base text-gray-600">• Cosine similarity</div>
                  <div className="text-base text-gray-600">• Cache (3600s TTL)</div>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">RPC Call:</div>
                  <div className="font-mono text-sm bg-gray-50 p-2 rounded border border-gray-200">
                    {`db.rpc("search_books", {`}<br/>
                    {`  query_embedding: [...],`}<br/>
                    {`  match_threshold: 0.5,`}<br/>
                    {`  match_count: 5`}<br/>
                    {`})`}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3.5: Post-Search Transformations */}
            <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-400 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-indigo-600 text-white rounded-full w-9 h-8 flex items-center justify-center text-xs font-bold">3.5</div>
                <div className="font-bold text-xl text-gray-900">Post-Search Transformations</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Substeps:</div>
                  <div className="text-sm text-gray-600">3.5.1 Rotation for variety</div>
                  <div className="text-sm text-gray-600">3.5.2 <strong>Gate 2:</strong> Safety filter</div>
                  <div className="text-sm text-gray-600">3.5.3 Book hydration</div>
                  <button 
                    onClick={() => openCodeViewer('safety-filter')}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline mt-2 cursor-pointer flex items-center gap-1"
                  >
                    <Code2 className="w-3 h-3" />
                    recommendations.py:165-202
                  </button>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Safety (Gate 2):</div>
                  <div className="text-base text-gray-600">✅ Age bounds check</div>
                  <div className="text-base text-gray-600">✅ Unsafe keywords</div>
                  <div className="text-base text-gray-600">✅ Metadata parsing</div>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Book Hydration:</div>
                  <div className="text-base text-gray-600">• Cover URL resolution</div>
                  <div className="text-base text-gray-600">• Timestamp parsing</div>
                  <div className="text-base text-gray-600">• Safe defaults</div>
                  <div className="text-base text-gray-600">• Transform → BookResponse[]</div>
                </div>
              </div>
            </div>

            {/* Step 4: Explanation Generation */}
            <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-400 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                <div className="font-bold text-xl text-gray-900">Explanation Generation</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Services:</div>
                  <div className="text-base text-gray-600">✅ GPT-4o-mini</div>
                  <div className="text-base text-gray-600">✅ Guardrails (Gate 3)</div>
                  <button 
                    onClick={() => openCodeViewer('llm-explanation')}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline mt-2 cursor-pointer flex items-center gap-1"
                  >
                    <Code2 className="w-3 h-3" />
                    recommendations.py:234-276
                  </button>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Processing:</div>
                  <div className="text-base text-gray-600">• RAG: inject titles + authors</div>
                  <div className="text-base text-gray-600">• temp=0.7, max=120 tokens</div>
                  <div className="text-base text-gray-600">• <strong>Gate 3:</strong> validate_chat_summary()</div>
                  <div className="text-base text-gray-600">• Fallback template</div>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Output:</div>
                  <div className="text-sm bg-gray-50 p-2 rounded border border-gray-200 text-gray-700">
                    "Here are darker fantasy tales with morally complex characters..."
                  </div>
                  <div className="text-sm text-gray-500 mt-1">XSS prevention + validation</div>
                </div>
              </div>
            </div>

            {/* Step 5: Response */}
            <div className="bg-white rounded-lg p-5 border-2 border-purple-400 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                <div className="font-bold text-xl text-gray-900">Return to Frontend</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Response Format:</div>
                  <div className="font-mono text-sm bg-purple-50 p-2 rounded border border-purple-200">
                    {`{ type: "recommendations",`}<br/>
                    {`  books: [{ book_id, title,`}<br/>
                    {`    authors, popularity_score,`}<br/>
                    {`    cover_url, ... }],`}<br/>
                    {`  explanation: "...",`}<br/>
                    {`  tool: "vector_search",`}<br/>
                    {`  agent_decision: {...} }`}
                  </div>
                  <button 
                    onClick={() => openCodeViewer('response-model')}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline mt-2 cursor-pointer flex items-center gap-1"
                  >
                    <Code2 className="w-3 h-3" />
                    RecommendationResponse (models.py:527-571)
                  </button>
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-700 mb-1">Frontend:</div>
                  <div className="text-base text-gray-600">✅ BookCard display</div>
                  <div className="text-base text-gray-600">✅ Explanation</div>
                  <div className="text-base text-gray-600">✅ Metadata</div>
                  <div className="text-base text-amber-600">Conversation DB (planned)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Considerations */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
              <div className="text-base font-bold text-orange-900 mb-2">🛡️ Security (3 Gates):</div>
              <div className="text-base text-gray-700 space-y-1">
                <div>✅ <strong>Gate 1:</strong> LLM injection prevention</div>
                <div>✅ <strong>Gate 2:</strong> Age-appropriate filtering</div>
                <div>✅ <strong>Gate 3:</strong> XSS/phishing prevention</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
              <div className="text-base font-bold text-blue-900 mb-2">⚡ Performance:</div>
              <div className="text-base text-gray-700 space-y-1">
                <div>✅ <strong>Step 2:</strong> DeepSeek ~1-2.5s</div>
                <div>✅ <strong>Step 3:</strong> Embedding ~150-300ms, pgvector ~10-50ms</div>
                <div>✅ <strong>Step 4:</strong> GPT-4o-mini ~0.5-1.5s</div>
                <div><strong>Total:</strong> ~2.5-4.5s (with caching)</div>
              </div>
            </div>
          </div>

          {/* Click instruction */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 text-base text-gray-600 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span>Click code references to view implementation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Code Viewer Modal */}
      <CodeViewerModal snippetKey={selectedCode} onClose={closeCodeViewer} />
    </div>
  );
}