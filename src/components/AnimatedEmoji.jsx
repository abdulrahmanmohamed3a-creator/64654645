import './AnimatedEmoji.css';

export default function AnimatedEmoji({ 
  src = '/profile.jpg', 
  width = '300px', 
  height = '300px', 
  shape = 'circle' 
}) {
  const borderRadius = shape === 'circle' ? '50%' : '16px';
  
  return (
    <div className="emoji-frame" style={{ width: width, height: height, borderRadius: borderRadius }}>
      <div className="floating-emoji" style={{ width: '100%', height: '100%' }}>
        <img 
          src={src} 
          alt="Abdulrahman" 
          className="avatar-image"
          style={{ borderRadius: borderRadius }}
        />
      </div>
      {shape === 'circle' && <div className="emoji-shadow"></div>}
    </div>
  );
}
