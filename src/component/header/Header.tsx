import React from 'react';
import './Header.scss';
import logo from '../../assets/image/SV_texte_noir_beige.png'
function Header() {
    return (
        <header>
            <img src={logo}/>
            <nav>
                <a>Acceuil</a>
                <a>Découvrir</a>
                <a>Contact</a>
            </nav>
            <button>Se Connecter</button>
        </header>
    );
}

export default Header;