import React from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const Icon = tool.icon;
  const isComingSoon = tool.status === 'coming_soon';

  const Wrapper = isComingSoon ? 'div' : 'a';
  const wrapperProps = isComingSoon
    ? { className: 'block p-6 rounded-2xl bg-gray-50 border border-gray-100 cursor-not-allowed opacity-75' }
    : {
        href: tool.url,
        target: tool.isExternal ? '_blank' : undefined,
        rel: tool.isExternal ? 'noopener noreferrer' : undefined,
        className: 'block p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group',
      };

  return (
    // @ts-ignore - Dynamic component type check is complex in strict TS, simplifying for this context
    <Wrapper {...wrapperProps}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${isComingSoon ? 'bg-gray-100 text-gray-400' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors'}`}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
        {isComingSoon ? (
           <div className="flex items-center space-x-1 text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
            <Lock size={12} />
            <span>Próximamente</span>
           </div>
        ) : (
          <ArrowUpRight 
            size={20} 
            className="text-gray-300 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" 
          />
        )}
      </div>
      
      <h3 className={`text-lg font-semibold mb-2 ${isComingSoon ? 'text-gray-400' : 'text-gray-900 group-hover:text-blue-900'}`}>
        {tool.title}
      </h3>
      
      <p className={`text-sm leading-relaxed ${isComingSoon ? 'text-gray-400' : 'text-gray-500'}`}>
        {tool.description}
      </p>
    </Wrapper>
  );
};