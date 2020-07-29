import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/kaeflix_120.png'
import '../../menu.css'
import Button from '../Button'
// import ButtonLink from '../ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Kaeflix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video" alt="Cadastre um novo vídeo">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;