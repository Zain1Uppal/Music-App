import React from "react";
import { NavLink } from "react-router-dom";
import { BackButton } from "../../components";
import './style.css';

export const Header = () => {
    return (
        <nav>
            <BackButton />
            <NavLink className='active' exact to="/">About</NavLink>
            <NavLink className='active' to="/albums">Albums</NavLink>
        </nav>
    )
};