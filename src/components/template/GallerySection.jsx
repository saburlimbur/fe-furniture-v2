import React from 'react';

function GallerySection() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col gap-3 items-center">
          <div className="bg-gray-200 py-2 px-3 rounded-full">
            <h4 className="text-orange-600 font-semibold">
              Checkout our Collection
            </h4>
          </div>
          <h2 className="text-5xl font-semibold">Our Furniture Gallery</h2>
          <p className="text-gray-700 text-lg">
            Explore Our Gallery of Inspiring Designs
          </p>
        </div>

        <div className="pt-5 w-full">
          <img src="/Gallery.png" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
