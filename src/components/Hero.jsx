import { useTypewriter } from '../hooks/useTypewriter';
import { Download, ArrowRight } from 'lucide-react';
import AnimatedEmoji from './AnimatedEmoji';
import './Hero.css';

export default function Hero() {
  const typingText = useTypewriter([
    "Digital Marketing Specialist",
    "Social Media Manager",
    "Graphic Designer",
    "AI & Automation Expert",
    "Content Strategist"
  ], 100, 50, 2000);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content fade-up visible">
          <h1>Hi, I'm <br/><span className="highlight">Abdulrahman Fawzy</span></h1>
          <div className="typing-container">
            <span className="typing-text">{typingText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-subtitle">
            Helping brands grow through strategic marketing, creative design, and smart automation.
          </p>
          <div className="hero-actions">

            <a href="#contact" className="btn btn-outline">
              Let's Connect
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper fade-up visible" style={{transitionDelay: '0.2s'}}>
          <AnimatedEmoji src="/profile.jpg" width="350px" height="350px" shape="circle" />
        </div>
      </div>
    </section>
  );
}
