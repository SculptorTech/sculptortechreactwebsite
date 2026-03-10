import React, { useState } from "react";
import Masonry from "./Masonry";
import { galleryImages } from "./galleryData";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section
        id="gallery"
        className="
          py-6 relative overflow-hidden
          bg-white text-slate-900
          dark:bg-slate-950 dark:text-white
          transition-colors
        "
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            {/* <span
              className="
                inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4
                bg-blue-50 text-cyan-700
                dark:bg-cyan-900 dark:text-blue-300
              "
            >
              Portfolio
            </span> */}

            <h2 className="text-4xl font-bold mb-4">
              Our Work Gallery
            </h2>

            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded" />

            <p className="mt-2 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
              A glimpse into the innovative solutions we build for our partners.
            </p>
          </div>

          {/* Masonry */}
          <div className="min-h-[800px]">
            <Masonry
              items={galleryImages.map((item, index) => ({
                ...item,
                onClick: () => openModal(index),
              }))}
              config={{
                columns: [1, 2, 3],
                gap: [24, 12, 6],
                media: [640, 768, 1024],
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-8 text-white text-3xl font-bold"
          >
            ✕
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl font-bold"
          >
            ❮
          </button>

          {/* Image */}
          <img
            src={galleryImages[currentIndex].img}
            alt="Gallery"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-4xl font-bold"
          >
            ❯
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
