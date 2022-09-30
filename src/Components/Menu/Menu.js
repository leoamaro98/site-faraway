import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Col,

} from 'reactstrap';
import "./Menu.css"


const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='menu'>
            <Navbar>

                <div className='container-logo'>
                    <NavbarBrand href="/" className="navBrand" ><img src="/Imagens/whitelogo-h.png"></img></NavbarBrand>
                    <div className='nome-logo-fw'>
                        <h1 id='farway'>FARAWAY</h1>
                        <p>TECNOLOGIA</p>
                    </div>
                </div>
                <Nav >
                    <NavItem>
                        <NavLink href="/">
                            Inicio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/servicos">
                            Nossos Serviços
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/canalcomunicacao">
                            Canal de Comunicação
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/sobre">
                            Sobre
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contato">
                            Contato
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="https://www.linkedin.com/company/faraway-tecnologia/about/">
                            <img id="linkedinicon" src="/Imagens/inicon.png"></img>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://api.whatsapp.com/send?phone=554198772368">
                            <img id="wppicon" src="/Imagens/wppicon.png"></img>
                        </NavLink>
                    </NavItem>

                </Nav>
            </Navbar>

        </div>
    );
}

export default Menu;

