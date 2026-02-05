import { Play, ExternalLink, MousePointer } from 'lucide-react';

interface LiveDemoPromptProps {
  title: string;
  description: string;
  demoPoints: string[];
  variant?: 'primary' | 'secondary';
}

export function LiveDemoPrompt({ title, description, demoPoints, variant = 'primary' }: LiveDemoPromptProps) {
  const bgGradient = variant === 'primary' 
    ? 'from-purple-600 to-blue-600' 
    : 'from-cyan-600 to-teal-600';
  
  const iconColor = variant === 'primary' ? 'text-purple-300' : 'text-cyan-300';
  
  return (
    <div className={`bg-gradient-to-r ${bgGradient} rounded-2xl p-8 shadow-2xl my-8 border-2 border-white border-opacity-20`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-white bg-opacity-20 rounded-full p-4">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white text-opacity-80 uppercase tracking-wider mb-1">
              Live Demo Opportunity
            </div>
            <h3 className="text-3xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <ExternalLink className="w-6 h-6 text-white text-opacity-60" />
      </div>
      
      <p className="text-lg text-white text-opacity-90 mb-6">
        {description}
      </p>
      
      <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-4">
          <MousePointer className={`w-5 h-5 ${iconColor}`} />
          <div className="font-semibold text-white">Demo Points to Show:</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {demoPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3 bg-white bg-opacity-10 rounded-lg px-4 py-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white text-sm font-bold">
                {index + 1}
              </div>
              <div className="text-sm text-white">{point}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-2 text-xs text-white text-opacity-70">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
        <span>Press to continue with live demo or advance to next slide</span>
      </div>
    </div>
  );
}
