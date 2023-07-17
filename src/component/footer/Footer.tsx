import React from 'react';
import './Footer.scss';


function Footer() {
    return (
        <footer>
            <ul>
                <li><a>email : Lukas.andries.sn@gmail.com</a></li>
                <li>64000, Pau</li>
                <li id={"author"}>Fait par : Andries lukas</li>
            </ul>
            <div>
                <h3>A propos</h3>
                <p>un texte quelconque qui explique le but de ce site</p>
            </div>
            <div>
                <h3>Pages Légales</h3>
                <ul>
                    <li>Politique de Confidentialité</li>
                    <li>Condition d'utilisation</li>
                    <li>Mentions Légales</li>
                    <li>Privacy Policy</li>
                    <li>Nous Contacter</li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;