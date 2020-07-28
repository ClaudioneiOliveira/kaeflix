import React from 'react';
import Logo from '../../assets/img/kaeflix_120.png'
import '../../menu.css'
import Button from '../Button'
// import ButtonLink from '../ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Kaeflix" />
            </a>

            <Button as="a" className="ButtonLink" href="/" alt="Botão do sucesso">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;