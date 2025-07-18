import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f4] flex items-center justify-center text-center px-4">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-4xl font-extrabold  text-black">
         Feed your brain
        </h1>
        <p className="text-xl md:text-4xl text-stone-500 line-through italic">
          with daily affirmations
        </p>
        <p className="text-xl md:text-4xl font-semibold text-white bg-black inline-block px-2 py-1">
           with intellectual fire
        </p>
        <div className="pt-8 animate-bounce text-stone-400 text-5xl font-bold">↓</div>
      </div>
    </div>
  );
};

export default Hero;