import { useState, useEffect } from 'react';
import './AnimatedEmoji.css';

export default function AnimatedEmoji({ size = '200px' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [avatar, setAvatar] = useState('/profile.jpg');

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate rotation based on cursor position relative to screen center
      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;
      setMousePos({ x, y });

      // Change expressions
      if (Math.abs(x) > 10 || Math.abs(y) > 10) {
        setAvatar('/about.jpg');
      } else {
        setAvatar('/profile.jpg');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="emoji-frame" style={{ width: size, height: size }}>
      <div 
        className="floating-emoji"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
          width: '100%',
          height: '100%'
        }}
      >
        <img 
          src={avatar} 
          alt="Abdulrahman" 
          className="avatar-image"
        />
      </div>
      <div className="emoji-shadow"></div>
    </div>
  );
}
