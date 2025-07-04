/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Marquee from 'react-fast-marquee';

import FaqSection from '@/components/template/FaqSection';

import Category from '../components/template/Category';
import GallerySection from '../components/template/GallerySection';
import Hero from '../components/template/HeroSection';
import ProductSection from '../components/template/ProductSection';

function HomePage() {
  return (
    <section className="max-w-[1500px] mx-auto px-4 pt-3 min-h-screen">
      <Hero>
        <div className="relative flex overflow-hidden w-full h-48">
          <Marquee>
            <img src="/ikea-logo.png" className="w-[200px] h-24 object-cover" />
            <img src="/homedoki.png" className="w-[200px] h-24 object-cover" />
            <img src="/ikea-logo.png" className="w-[200px] h-24 object-cover" />
            <img src="/homedoki.png" className="w-[200px] h-24 object-cover" />
            <img src="/ikea-logo.png" className="w-[200px] h-24 object-cover" />
            <img src="/homedoki.png" className="w-[200px] h-24 object-cover" />
            <img src="/ikea-logo.png" className="w-[200px] h-24 object-cover" />
            <img src="/homedoki.png" className="w-[200px] h-24 object-cover" />
          </Marquee>
        </div>
      </Hero>
      <Category />
      {/* <About /> */}
      <ProductSection />
      <GallerySection />
      <FaqSection />
    </section>
  );
}

export default HomePage;
