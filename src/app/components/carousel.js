"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const flyers = [
  "./images/flyers/blue_aihorizons.jpg",
  "./images/flyers/orange_aihorizons.jpg"
];

export default function FlyerCarousel() {
  const [index, setIndex] = useState(0);

  // Function to go to the next image
  const nextFlyer = () => {
    setIndex((prevIndex) => (prevIndex + 1) % flyers.length);
  };

  // Function to go to the previous image
  const prevFlyer = () => {
    setIndex((prevIndex) => (prevIndex - 1 + flyers.length) % flyers.length);
  };

  // Auto-play functionality (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(nextFlyer, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Flyer Image */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img 
          src={flyers[index]} 
          alt={`Flyer ${index + 1}`} 
          className="w-full h-auto"
        />
      </div>

      {/* Left Button */}
      <button 
        onClick={prevFlyer} 
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700">
        <ChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button 
        onClick={nextFlyer} 
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
