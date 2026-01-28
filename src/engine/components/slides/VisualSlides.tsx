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
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-black mb-6 leading-[0.9] tracking-tighter uppercase">
            {slide.title}
            </h1>
            <div className="w-24 h-2 bg-dify-blue mb-8"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-medium leading-snug max-w-4xl">
            {slide.subtitle}
            </h2>
        </div>

        <div className="mt-auto pt-8 border-t border-gray-200 w-full">
            <div>
                <p className="text-xl font-bold text-dify-blue tracking-tight mb-1">Solutions & Customer Success</p>
                <p className="text-base text-gray-500">Infrastructure for Intuitive LLM App Development</p>
            </div>
        </div>
      </div>

      {/* Right Side: Geometric Hero Element (Golden Ratio ~38%) */}
      <div className="hidden lg:flex w-[38%] bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 flex items-center justify-center">

          {/* Large Background Circle */}
          <div className="absolute w-96 h-96 rounded-full border-8 border-dify-blue/10 animate-pulse"></div>

          {/* Main Square (Rotated 45deg) */}
          <div className="absolute w-64 h-64 bg-dify-blue rotate-45 opacity-90 shadow-2xl">
            <div className="absolute inset-4 bg-white/20"></div>
            <div className="absolute inset-8 bg-white/20"></div>
          </div>

          {/* Accent Elements */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-600/20 rotate-12"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-dify-blue/10 rounded-full"></div>

          {/* Small Decorative Squares */}
          <div className="absolute top-20 right-32 w-12 h-12 border-4 border-dify-blue/40 rotate-45"></div>
          <div className="absolute bottom-32 left-20 w-16 h-16 bg-dify-blue/30"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(21, 94, 239, 0.3) 25%, rgba(21, 94, 239, 0.3) 26%, transparent 27%, transparent 74%, rgba(21, 94, 239, 0.3) 75%, rgba(21, 94, 239, 0.3) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(21, 94, 239, 0.3) 25%, rgba(21, 94, 239, 0.3) 26%, transparent 27%, transparent 74%, rgba(21, 94, 239, 0.3) 75%, rgba(21, 94, 239, 0.3) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
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
  return (
    <div className="flex h-full bg-white relative overflow-hidden items-center justify-center">
      {/* Centered THANK YOU */}
      <div className="flex flex-col items-center justify-center text-center p-24">
        <h1 className="text-[10rem] sm:text-[12rem] md:text-[14rem] font-extrabold leading-[0.8] tracking-tighter text-black mb-8">
          THANK<br/>YOU
        </h1>
        <div className="w-40 h-4 bg-dify-blue mb-8"></div>
        <p className="text-4xl text-gray-500 font-light">{slide.subtitle}</p>
      </div>
    </div>
  );
};