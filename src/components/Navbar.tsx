import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Drawer } from "@mui/material";
import { me } from "../data/me";
import { IconName } from "../models/icon";
import Icon from "./Icon";

import "./Navbar.scss";

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    
    const drawerStyle: React.CSSProperties = {
        background: '#f3f3f3',
        padding: '14px 28px',
        width: '80%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const drawerNavigate = (path: string) => {
        navigate(path);
        setOpen(false);
    };
    
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

            <button className="navbar-burger" onClick={() => setOpen(true)}>
                <Icon iconName={IconName.Burger} />
            </button>
        </nav>
        <Drawer open={open} onClose={() => setOpen(false)} PaperProps={{ style: drawerStyle }}>
            <ul className="drawer-items">
                <li onClick={() => drawerNavigate("/resume")} className={pathname === "/resume" ? "active" : undefined}>Mon CV</li>
                <li onClick={() => drawerNavigate("/skills")} className={pathname === "/skills" ? "active" : undefined}>Compétences</li>
                <li onClick={() => drawerNavigate("/contact")} className={pathname === "/contact" ? "active" : undefined}>Contact</li>
            </ul>
        </Drawer>
    </>
}

export default Navbar;