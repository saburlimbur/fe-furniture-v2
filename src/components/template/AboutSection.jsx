import React from 'react';
import { Check } from 'lucide-react';

import Button from '../elements/Button';

function About() {
  return (
    <section className="w-full flex py-16">
      <div className="flex w-full justify-between">
        {/* teks */}
        <div className="w-1/3 flex flex-col justify-start">
          <div className="flex flex-col gap-8">
            <h2 className="text-[50px] font-bold leading-tight">
              Elevate Your Space with Uncompromising Quality
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the epitome of furniture quality. Our products are
              meticulously crafted with an unwavering commitment to excellence.
              From the finest materials to expert craftsmanship, each piece
              embodies durability, comfort, and timeless style. Elevate your
              space with the assurance of exceptional quality and lasting
              beauty.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <div className="rounded-full p-2 bg-[#F97316]">
                  <Check className="text-white" />
                </div>
                <h3 className="text-xl font-medium">
                  Experience Unparalleled Quality
                </h3>
              </div>
              <div className="flex gap-3 items-center">
                <div className="rounded-full p-2 bg-[#F97316]">
                  <Check className="text-white" />
                </div>
                <h3 className="text-xl font-medium">
                  Experience Unparalleled Quality
                </h3>
              </div>
              <div className="flex gap-3 items-center">
                <div className="rounded-full p-2 bg-[#F97316]">
                  <Check className="text-white" />
                </div>
                <h3 className="text-xl font-medium">
                  Experience Unparalleled Quality
                </h3>
              </div>
            </div>

            <Button className="py-4 px-6 bg-black text-white font-medium max-w-[180px] rounded-xl">
              Shop now
            </Button>
          </div>
        </div>

        {/* image */}
        <div className="w-2/3 flex justify-end items-end pl-20">
          <img
            src="/About.png"
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
