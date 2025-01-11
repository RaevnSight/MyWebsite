import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { GoArrowRight } from 'react-icons/go';

const Hero = () => {
  return (
    <header className="relative pb-20 pt-36 bg-gradient-to-b from-gray-100 to-white dark:from-black-100 dark:to-black">
      <div className="container mx-auto h-full">
        {/* Background spotlight effect */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]"></div>

        {/* Hero Content */}
        <section className="relative z-10 flex flex-col xl:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col">
            {/* Dynamic Header Text */}
            <TextGenerateEffect
              className="text-left text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight"
              words="My Legendary Ultimate Full Stack Developer Portfolio"
            />

            {/* Introduction */}
            <p className="text-left text-sm md:text-2xl mt-4 mb-8">
              Hi, I'm{' '}
              <span className="font-semibold">Jim</span>, a
              Full Stack Developer based in the Philippines.
            </p>

            {/* Call to Action Button */}
            <a
              href="#about"
              aria-label="Navigate to About section">
              <MagicButton
                title="Show my work"
                icon={<GoArrowRight />}
                position="right"
              />
            </a>
          </div>

          {/* Right Content - Photo */}
          <div className="flex items-center justify-center mt-12 xl:mt-0">
            <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              {/* Replace 'Insert Photo' with an actual image */}
              <p className="text-center text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center h-full">
                Insert Photo Here
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
