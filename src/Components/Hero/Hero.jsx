import './Hero.css'
import AnchorLink  from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div  id ="home" className='hero'>
      <h1> <span>I am Manikanta swamy</span><br/>Fullstack web developer based India</h1>
      <p>Iam an asset to the company , dont dare to loose me.</p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink 
            offset={50} 
            href="#contact" 
            className="anchor-link"
          >Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>

      
    </div>
  )
}

export default Hero
