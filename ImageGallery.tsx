import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  altText: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main large image */}
        <div 
          className="md:col-span-2 h-80 md:h-96 rounded-xl overflow-hidden cursor-pointer"
          onClick={() => openModal(0)}
        >
          <img
            src={images[0]}
            alt={`${altText} - main view`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Side images */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {images.slice(1, 3).map((image, index) => (
            <div 
              key={index + 1} 
              className="h-36 md:h-[calc(48px_-_0.5rem)] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openModal(index + 1)}
            >
              <img
                src={image}
                alt={`${altText} - view ${index + 2}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-amber-600 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <img
            src={images[currentIndex]}
            alt={`${altText} - fullscreen view`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-amber-600 transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-amber-500' : 'bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;