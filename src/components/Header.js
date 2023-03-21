import React from "react";
import './Header.css';
import Logo from "./NoteImage/pencil.png";


const Header = () => {
    return(
        <header>
            <a className="co-name" href="tittle">
                <h1 id='tittle'>NOTE 
                <img className="logo" src={Logo} alt=""/>
                Keeper</h1>
            </a>

        </header>
    );
}

export default Header;