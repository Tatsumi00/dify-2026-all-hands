import React from 'react';
import { SlideData } from '../../types';
import { BackgroundPattern, SlideHeader, parseText } from '../Shared';
import { Check, Target, Lightbulb, Info } from 'lucide-react';

interface SlideProps {
  slide: SlideData;
}

export const TitleSlide: React.FC<SlideProps> = ({ slide }) => (
  <div className="flex h-full relative overflow-hidden bg-white">
      {/* Solid Blue Accent Bar Top - Animated Width */}
      <div className="absolute top-0 left-0 w-0 h-4 bg-dify-blue z-30 animate-[slideRight_1s_ease-out_forwards]"></div>

      {/* Left Side: Content (Golden Ratio ~62%) */}
      <div className="w-full lg:w-[62%] flex flex-col justify-center items-start p-12 sm:p-16 md:p-20 lg:p-24 relative z-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="mb-8 sm:mb-12">
            <div className="inline-block px-4 py-1 border border-black text-black font-bold text-sm tracking-[0.2em] uppercase mb-6">
            {slide.footer || "Product Primer"}
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-black mb-6 leading-[0.9] tracking-tighter">
            {slide.title}
            </h1>
            <div className="w-24 h-2 bg-dify-blue mb-8"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-medium leading-snug max-w-4xl">
            {slide.subtitle}
            </h2>
        </div>
      </div>

      {/* Right Side: Clean white space */}
      <div className="hidden lg:flex w-[38%] bg-white"></div>
  </div>
);

export const SectionSlide: React.FC<SlideProps> = ({ slide }) => (
  <div className="flex flex-col h-full justify-center items-start p-12 sm:p-16 md:p-20 lg:p-24 bg-dify-blue text-white relative overflow-hidden">
    {/* Minimalist Number Indicator */}
    <div className="absolute right-0 bottom-0 text-[30rem] font-bold text-white opacity-10 leading-none select-none font-mono translate-y-[20%] translate-x-[10%]">
      {slide.footer ? slide.footer.replace('Part 0', '') : Math.floor(slide.id / 5)}
    </div>
    
    <div className="relative z-10 w-full max-w-6xl">
      <div className="flex items-center gap-4 mb-8">
         <span className="h-px w-12 bg-white"></span>
         <h2 className="text-xl font-bold tracking-[0.3em] uppercase text-white/90">
            {slide.footer || `Part ${Math.floor(slide.id / 5)}`}
         </h2>
      </div>
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-8 leading-none tracking-tight">{slide.title}</h1>
      <h3 className="text-2xl sm:text-3xl md:text-4xl opacity-90 font-light max-w-4xl leading-relaxed border-l-4 border-white pl-6">{slide.subtitle}</h3>
    </div>
  </div>
);

export const CourseOverviewSlide: React.FC<SlideProps> = ({ slide }) => (
  <div className="flex flex-col h-full p-12 sm:p-16 md:p-20 lg:p-24 relative bg-white overflow-hidden">
      <BackgroundPattern />
      <SlideHeader title={slide.title} subtitle={slide.subtitle} />
      
      <div className="flex-1 flex flex-col gap-8 relative z-10 mt-12 min-h-0">
          {/* Objective & Value Cards - Strict Grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-0">
              {/* Objective Card */}
              <div className="bg-gray-50 border border-gray-200 p-12 flex flex-col justify-start group min-h-0">
                  <div className="mb-6">
                      <h3 className="text-sm font-bold text-dify-blue uppercase tracking-[0.2em] border-b-2 border-dify-blue inline-block pb-2">Course Objective</h3>
                  </div>
                  <p className="text-3xl sm:text-4xl font-light text-gray-900 leading-tight">{parseText(slide.content?.[0] || "")}</p>
              </div>

              {/* Value Card */}
              <div className="bg-dify-blue p-12 flex flex-col justify-start group text-white min-h-0">
                  <div className="mb-6">
                      <h3 className="text-sm font-bold text-white/80 uppercase tracking-[0.2em] border-b-2 border-white inline-block pb-2">Core Value</h3>
                  </div>
                  <p className="text-3xl sm:text-4xl font-light text-white leading-tight">{parseText(slide.content?.[1] || "")}</p>
              </div>
          </div>

          {/* Scope Footer */}
          <div className="h-24 bg-white border-t-4 border-gray-100 flex items-center pt-4 relative flex-shrink-0">
              <div className="absolute left-0 top-0 h-1 w-12 bg-dify-blue"></div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mr-8 flex-shrink-0">Scope</span>
              <p className="text-xl text-gray-600 flex-1 font-light">{parseText(slide.content?.[2] || "")}</p>
          </div>
      </div>
  </div>
);

// Reverted to Black for "Summary" slides - Minimalist
export const MacroFocusSlide: React.FC<SlideProps> = ({ slide }) => (
  <div className="flex flex-col h-full justify-center items-center bg-black text-white relative overflow-hidden p-12 sm:p-16 md:p-24">
      {/* Solid Background - No Texture */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 max-w-6xl text-center w-full">
          <div className="mb-8 mx-auto w-24 h-1 bg-dify-blue"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight tracking-tight">{parseText(slide.title)}</h1>
          
          {slide.content && (
              <div className="grid grid-cols-1 gap-6 text-left max-w-4xl mx-auto">
                  {slide.content.map((item, i) => (
                      <div key={i} className="bg-white/5 p-6 sm:p-8 rounded-none border-l-4 border-dify-blue flex items-start">
                          <div className="mr-6 mt-1 text-dify-blue flex-shrink-0">
                              <Check size={24} />
                          </div>
                          <span className="text-xl sm:text-2xl font-light leading-relaxed text-white/90">{parseText(item)}</span>
                      </div>
                  ))}
              </div>
          )}
      </div>
  </div>
);

// Blue Theme for "Chapter Titles" - Solid, No Gradients
export const ChapterTitleSlide: React.FC<SlideProps> = ({ slide }) => (
  <div className="flex flex-col h-full justify-center items-center bg-dify-blue text-white relative overflow-hidden p-12 sm:p-16 md:p-24">
      <div className="relative z-10 max-w-6xl text-center w-full">
          <div className="mb-8 mx-auto w-24 h-1 bg-white"></div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-12 leading-none tracking-tight text-wrap balance break-words max-w-5xl mx-auto">{parseText(slide.title)}</h1>
          
          {slide.content && (
              <div className="grid grid-cols-1 gap-6 text-left max-w-3xl mx-auto">
                  {slide.content.map((item, i) => (
                      <div key={i} className="border-b border-white/30 p-6 flex items-center hover:bg-white/10 transition-colors">
                          <span className="text-2xl sm:text-3xl font-medium text-white">{parseText(item)}</span>
                      </div>
                  ))}
              </div>
          )}
      </div>
  </div>
);

export const EndSlide: React.FC<SlideProps> = ({ slide }) => {
  const hasContent = Array.isArray(slide.content) && slide.content.some((line) => line.trim().length > 0);
  const titleLines = (slide.title || 'THANK YOU').split('\n').filter(Boolean);

  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-dify-blue"></div>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-10 sm:px-16 md:px-24">
        <h1 className="font-extrabold tracking-tight leading-[0.9] text-black">
          {titleLines.map((line, idx) => (
            <span key={idx} className="block text-7xl sm:text-8xl md:text-9xl">
              {line}
            </span>
          ))}
        </h1>

        {slide.subtitle && (
          <p className="mt-6 text-2xl sm:text-3xl md:text-4xl text-gray-600 font-light">
            {slide.subtitle}
          </p>
        )}

        <div className="mt-10 w-32 sm:w-40 h-2 bg-dify-blue"></div>

        {hasContent && (
          <div className="mt-10 w-full max-w-5xl text-left">
            <ul className="space-y-3">
              {slide.content!.filter((line) => line.trim().length > 0).map((line, idx) => (
                <li key={idx} className="flex items-start gap-3 text-lg sm:text-xl text-gray-600">
                  <span className="mt-2 w-2 h-2 bg-dify-blue rounded-sm flex-shrink-0"></span>
                  <span className="leading-relaxed">{parseText(line.trim())}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {slide.footer && (
        <div className="px-10 sm:px-16 md:px-24 py-8 text-center text-gray-500 border-t border-gray-200">
          {slide.footer}
        </div>
      )}
    </div>
  );
};
