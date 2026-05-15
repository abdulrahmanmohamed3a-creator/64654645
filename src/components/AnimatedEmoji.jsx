import './AnimatedEmoji.css';

export default function AnimatedEmoji({ 
  src = '/profile.jpg', 
  width = '300px', 
  height = '300px', 
  shape = 'circle' 
}) {
  const borderRadius = shape === 'circle' ? '50%' : '16px';
  const isCircle = shape === 'circle';
  
  return (
    <div 
      className="emoji-frame" 
      style={{ 
        width: width, 
        height: isCircle ? height : 'auto', 
        maxHeight: isCircle ? height : 'none',
        borderRadius: borderRadius,
        alignItems: 'flex-start' // Always align to top to see the face
      }}
    >
      <div className="floating-emoji" style={{ width: '100%', height: '100%' }}>
        <img 
          src={src} 
          alt="Abdulrahman" 
          className="avatar-image"
          style={{ borderRadius: borderRadius }}
        />
      </div>
      {isCircle && <div className="emoji-shadow"></div>}
    </div>
  );
}
