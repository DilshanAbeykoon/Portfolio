import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorBubbles = () => {
  const [bubbles, setBubbles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let bubbleId = 0;

    const handleMouseMove = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      setMousePosition({ x: newX, y: newY });

      // Create new bubble at cursor position
      const newBubble = {
        id: bubbleId++,
        x: newX,
        y: newY,
        size: Math.random() * 40 + 25, // Random size between 25-65px (much bigger)
        opacity: Math.random() * 0.8 + 0.4, // Random opacity between 0.4-1.2 (more visible)
        delay: Math.random() * 0.3, // Random animation delay
        color: `hsl(${Math.random() * 60 + 180}, 80%, 65%)` // Blue-cyan range with higher saturation
      };

      setBubbles(prev => {
        const updated = [...prev, newBubble];
        // Keep only last 20 bubbles for performance (increased from 15)
        return updated.slice(-20);
      });

      // Remove bubble after animation
      setTimeout(() => {
        setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
      }, 3000); // Increased lifetime from 2000ms to 3000ms
    };

    // Throttle mouse move events for better performance
    let throttleTimer = null;
    const throttledMouseMove = (e) => {
      if (throttleTimer === null) {
        throttleTimer = setTimeout(() => {
          handleMouseMove(e);
          throttleTimer = null;
        }, 50); // Create bubble every 50ms max
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (throttleTimer) {
        clearTimeout(throttleTimer);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1000]">
      {/* Main cursor follower */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-blue-400/40 backdrop-blur-sm border-2 border-blue-300/60"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Bubble trail */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full backdrop-blur-sm border border-white/20"
          style={{
            left: bubble.x - bubble.size / 2,
            top: bubble.y - bubble.size / 2,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), ${bubble.color}40, ${bubble.color}20)`,
            boxShadow: `0 0 ${bubble.size}px ${bubble.color}20, inset 0 0 ${bubble.size/2}px rgba(255,255,255,0.3)`,
          }}
          initial={{
            scale: 0,
            opacity: bubble.opacity,
            rotate: 0,
          }}
          animate={{
            scale: [0, 1, 1.3, 0],
            opacity: [bubble.opacity, bubble.opacity * 0.9, bubble.opacity * 0.5, 0],
            rotate: [0, 180, 360],
            y: [0, -30, -60],
            x: [0, Math.random() * 30 - 15, Math.random() * 60 - 30],
          }}
          transition={{
            duration: 3, // Increased from 2 seconds
            delay: bubble.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Floating particles */}
      {bubbles.slice(-8).map((bubble) => (
        <motion.div
          key={`particle-${bubble.id}`}
          className="absolute w-2 h-2 rounded-full bg-blue-300/70"
          style={{
            left: bubble.x + Math.random() * 60 - 30,
            top: bubble.y + Math.random() * 60 - 30,
          }}
          initial={{
            scale: 0,
            opacity: 0.9,
          }}
          animate={{
            scale: [0, 1.2, 0],
            opacity: [0.9, 0.5, 0],
            y: [0, -80],
            x: [0, Math.random() * 40 - 20],
          }}
          transition={{
            duration: 2, // Increased from 1.5 seconds
            delay: bubble.delay + 0.3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default CursorBubbles;
