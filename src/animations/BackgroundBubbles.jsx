import React, { useEffect, useState } from "react";

const BackgroundBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const bubbleArray = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 30 + 20,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
      top: Math.random() * 100,
    }));
    setBubbles(bubbleArray);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="absolute rounded-full bg-[#f1bc71]/30 blur-2xl animate-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBubbles;
