import profile from '../../assets/profile.jpg';
import "./About.css"
const About = () => {
  return (
    <div className='about' id ="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections"> {/* Make sure it's named consistently in CSS */}
        <div className="about-left">
            <img src={profile} alt=""/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am experienced in many things that exist in the real world.</p>
            <p>Even Albert Einstein is educated from my awesome theories.</p>
            <p>If you want your company to be a top tech leader, you can take a huge risk by hiring me!</p>
          </div>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>React</p>
            <hr style={{ width: '50%' }} />  
            </div>
          <div className="about-skill">
            <p>Python</p>
            <hr style={{ width: '50%' }} />  
            </div>
          <div className="about-skill">
            <p>SQL</p>
            <hr style={{ width: '50%' }} />  
            </div>
          <div className="about-skill">
            <p>HTML & CSS</p>
            <hr style={{ width: '50%' }} />  
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="achievements">
            <h1>Fresher+</h1>
        </div>
        <div className="achievements">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <div className="achievements">
            <h1>4+</h1>
            <p>PROFESSIONAL CERTIFICATIONS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
