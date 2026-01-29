import React from 'react';
import { SlideData } from '../../types';
import { BackgroundPattern, SlideHeader } from '../Shared';

interface CardSlideProps {
  slide: SlideData;
}

// Helper to parse pseudo-markdown
const renderDescription = (text: string, tagColorClass: string) => {
  if (!text) return null;
  
  // STRICT COLOR ENFORCEMENT: Neutral/Blue only
  const strictHighlightColor = 'text-dify-blue';

  return text.split('\n').map((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={idx} className="h-2"></div>;

    const isBullet = trimmed.startsWith('- ');
    const content = isBullet ? trimmed.substring(2) : trimmed;

    const parts = content.split(/(\*\*.*?\*\*)/g);
    const parsedContent = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            const text = part.slice(2, -2);
            if (text === 'Who' || text === 'What') {
                 return <span key={pIdx} className={`font-extrabold ${strictHighlightColor} text-xs sm:text-sm block mb-1 uppercase tracking-wider`}>{text}</span>;
            }
            return <strong key={pIdx} className={`font-bold ${strictHighlightColor}`}>{text}</strong>;
        }
        return <span key={pIdx} className="text-gray-600">{part}</span>;
    });

    if (isBullet) {
        return (
            <div key={idx} className="flex items-start gap-2 mb-1">
                <span className={`mt-2 w-1.5 h-1.5 rounded-full opacity-60 flex-shrink-0 bg-blue-600`}></span>
                <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{parsedContent}</span>
            </div>
        );
    }

    return (
        <div key={idx} className="mb-1 text-sm sm:text-base text-gray-600 leading-relaxed">
            {parsedContent}
        </div>
    );
  });
};

const CardItem: React.FC<{ item: any, style?: React.CSSProperties }> = ({ item, style }) => {
  const [imgError, setImgError] = React.useState(false);

  // Simplified Tag Styles - Dify Blue / Neutral only
  const tagColor = 'bg-blue-50 text-dify-blue border-blue-100';
  
  const hasLogo = !!item.logo && !imgError;

  let cardStyle = "bg-white border-gray-200 hover:border-dify-blue hover:shadow-md";
  let iconBg = "bg-gray-50 group-hover:bg-blue-50 border-gray-100 text-dify-blue";
  let titleColor = "text-gray-900";
  
  // Special Cards override
  if (item.title === "CORE POSITIONING" || item.title === "核心定位") {
      cardStyle = "bg-dify-blue border-dify-blue shadow-lg"; 
      iconBg = "bg-white/10 text-white border-white/20 backdrop-blur-sm";
      titleColor = "text-white";
  } else if (item.title === "VALUE" || item.title === "核心价值") {
      cardStyle = "bg-gray-50 border-gray-200";
      iconBg = "bg-white border-gray-200 text-dify-blue";
      titleColor = "text-gray-900";
  }

  return (
       <div className={`${cardStyle} rounded-sm border p-6 shadow-sm transition-all duration-300 flex flex-col items-start gap-6 h-full relative overflow-hidden group opacity-0 animate-fade-in-up`} style={style}>
           <div className="flex w-full justify-between items-start">
               <div className={`w-14 h-14 rounded-sm flex items-center justify-center border transition-colors duration-300 flex-shrink-0 ${iconBg}`}>
                   {hasLogo ? (
                      <img
                          src={item.logo}
                          alt={item.title}
                          className="max-w-[70%] max-h-[70%] object-contain"
                          onError={() => setImgError(true)}
                      />
                   ) : (
                      React.isValidElement(item.icon) ? React.cloneElement(item.icon as React.ReactElement<any>, {
                        size: undefined,
                        className: `w-7 h-7 ${(item.icon as React.ReactElement<any>).props.className || ''}`
                      }) : null
                   )}
               </div>
               
                {item.tags && (
                  <div className="flex flex-col items-end gap-1">
                    {item.tags.map((tag: string, tIdx: number) => (
                      <span key={tIdx} className={`px-2 py-0.5 rounded-sm text-[10px] uppercase font-bold tracking-wider border ${tagColor}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
           </div>

           <div className="w-full flex-1">
               <div className={`text-lg sm:text-xl font-bold ${titleColor} mb-3 leading-snug`}>
                  {item.title}
               </div>

               <div className="text-sm sm:text-base">
                  {renderDescription(item.description, tagColor)}
               </div>
           </div>
        </div>
  );
};

export const CardSlide: React.FC<CardSlideProps> = ({ slide }) => {
  const renderCards = () => {
    const items = slide.items;
    const simpleItems = slide.content;

    if (!items && !simpleItems) return null;
    
    // Unified Grid Logic
    // Always use Grid. 3 cols for most cases on LG.
    // 4 items -> 2 cols on MD/LG (2x2) is cleaner than 3+1.
    // 3 items -> 3 cols.
    // 5 items -> 3 cols (3, 2).
    
    const count = items ? items.length : (simpleItems ? simpleItems.length : 0);
    let gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    
    if (count === 2 || count === 4) {
        gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto";
    } else if (count >= 6) {
        gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"; // Keep 3 cols for density
    }

    if (items) {
      return (
        <div className={`grid ${gridClass} gap-6 w-full auto-rows-fr`}>
          {items.map((item, idx) => (
             <CardItem
               key={idx}
               item={item}
               style={{ animationDelay: `${idx * 100}ms` }}
             />
          ))}
        </div>
      );
    }
    
    // Fallback for simple string[] content
    return (
      <div className={`grid ${simpleItems!.length > 6 ? 'grid-cols-3' : 'grid-cols-2'} gap-6 w-full auto-rows-fr`}>
        {simpleItems!.map((item, idx) => {
          const [title, ...descParts] = item.split(':');
          const description = descParts.join(':');
          
          return (
            <div 
              key={idx} 
              className={`bg-white p-6 rounded-sm border border-gray-200 shadow-sm hover:border-dify-blue hover:shadow-md transition-all duration-300 group opacity-0 animate-fade-in-up h-full flex flex-col`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-dify-blue transition-colors">{title}</h3>
              {description && <p className="text-gray-600 text-base leading-relaxed flex-1">{description}</p>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 relative overflow-hidden">
       <BackgroundPattern />
       <SlideHeader title={slide.title} subtitle={slide.subtitle} />
       <div className="flex-grow min-h-0 relative z-10 overflow-y-auto pr-2">
         {renderCards()}
       </div>
    </div>
  );
};
