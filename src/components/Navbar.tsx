import React from "react";
import "./Navbar.scss";


const Navbar: React.FC = () => {
	return <>
	<nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-chip"></span>
          <p>Chihab BERKANE</p>
          <p>Software developer</p>
        </div>
        
        <ul>
          <li>Resume</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>
	</>
}

export default Navbar;