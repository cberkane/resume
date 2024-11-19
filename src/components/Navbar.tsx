import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { me } from "../data/me";

import "./Navbar.scss";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    
    return <>
        <nav className="navbar">
            <div className="navbar-brand" onClick={() => navigate("/home")}>
                <span className="navbar-chip"></span>
                <p>{me.fullName} <small>{me.occupation}</small></p>
            </div>

            <ul className="navbar-items">
                <li onClick={() => navigate("/resume")} className={pathname === "/resume" ? "active" : undefined}>Mon CV</li>
                <li onClick={() => navigate("/skills")} className={pathname === "/skills" ? "active" : undefined}>Compétences</li>
                <li onClick={() => navigate("/contact")} className={pathname === "/contact" ? "active" : undefined}>Contact</li>
            </ul>
        </nav>
    </>
}

export default Navbar;