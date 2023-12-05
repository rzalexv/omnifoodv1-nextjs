"use client";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const IMAGES = ["/assets/img/1.jpg", "/assets/img/2.jpg", "/assets/img/3.jpg", "/assets/img/4.jpg", "/assets/img/5.jpg", "/assets/img/6.jpg", "/assets/img/7.jpg", "/assets/img/8.jpg"];

export const Gallery = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index,
    });
  };
  return (
    <>
      <section className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {IMAGES.map((image, index) => (
            <div key={index} className="overflow-hidden bg-black">
              <Image src={image} alt={`Image ${index + 1}`} className="transition-all duration-500 scale-110 opacity-60 hover:opacity-100 hover:scale-100" width={800} height={600} onClick={() => openLightboxOnSlide(index + 1)} />
            </div>
          ))}
        </div>
      </section>
      <FsLightbox toggler={lightboxController.toggler} sources={IMAGES} slide={lightboxController.slide} />
    </>
  );
};
