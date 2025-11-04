import React, { useState, useEffect } from "react";
import slidesData from "../data/slides.json";

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const length = slidesData.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  if (!Array.isArray(slidesData) || length === 0) return null;

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg">
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out
            ${index === current ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-black bg-opacity-50 p-4 rounded">
            <h3 className="text-xl font-bold text-white">{slide.title}</h3>
            <p className="text-white">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slidesData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-pharosGold" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
