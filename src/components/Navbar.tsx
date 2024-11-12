import React from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.scss";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  
	return <>
	<nav className="navbar">
        <div className="navbar-brand" onClick={() => navigate("/home")}>
          <span className="navbar-chip"></span>
          <p>Chihab BERKANE <small>Software developer</small></p>
        </div>

        <ul className="navbar-items">
          <li onClick={() => navigate("/resume")}>Resume</li>
          <li onClick={() => navigate("/skills")}>Skills</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </nav>
	</>
}

export default Navbar;