import { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>
          <AnchorLink 
            offset={50} 
            href="#home" 
            className={`anchor-link ${menu === "home" ? "active" : ""}`}
            onClick={() => setMenu("home")}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            offset={50} 
            href="#about" 
            className={`anchor-link ${menu === "about" ? "active" : ""}`}
            onClick={() => setMenu("about")}
          >
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            offset={50} 
            href="#services" 
            className={`anchor-link ${menu === "services" ? "active" : ""}`}
            onClick={() => setMenu("services")}
          >
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            offset={50} 
            href="#work" 
            className={`anchor-link ${menu === "mywork" ? "active" : ""}`}
            onClick={() => setMenu("mywork")}
          >
            My Work
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            offset={50} 
            href="#contact" 
            className={`anchor-link ${menu === "contact" ? "active" : ""}`}
            onClick={() => setMenu("contact")}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink 
          className={`anchor-link ${menu === "contact" ? "active" : ""}`} 
          offset={50} 
          href="#contact"
        >
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
