import React, { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    alt: "Image 1",
    text: "This is the first image in the carousel."
  },
  {
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    alt: "Image 2",
    text: "This is the second image in the carousel."
  },
  {
    src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    alt: "Image 3",
    text: "This is the third image in the carousel."
  }
];

const CarouselWithText = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prevActiveIndex) => prevActiveIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex((prevActiveIndex) => prevActiveIndex - 1);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full">
      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 ${index === activeIndex ? "active" : "hidden"}`}
          >
            <img src={image.src} alt={image.alt} className="h-screen w-screen object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-black/50 backdrop-blur-md">
              <p className="text-white mx-4 my-2 text-center">{image.text}</p>
            </div>
          </div>
        ))}
      </div>
      
        <button type="button" className="p-2 absolute  bg-red-500 left-2 top-1/2" onClick={handlePrev}>
          &lt;
        </button>
        <button type="button" className="p-2 absolute  bg-red-500 right-2 top-1/2" onClick={handleNext}>
          &gt;
        </button>
      
    </div>
  );
};

export default CarouselWithText;
