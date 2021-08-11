import React, { useState } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'

import LogoFlattImage from '../img/Red-Vet-Logo-Flatt.png'

function Menu() {

    document.addEventListener('DOMContentLoaded', function () {

        let navbar = document.getElementById("nav-main");
        let navLogo = document.getElementById("nav-logo");

        let change = navbar.offsetTop;


        const toggleVisible = () => {
            if (window.pageYOffset > change) {
                navbar.classList.add("navbar-white");
                navLogo.classList.remove("navbar-brand-logo-white");

            } else {
                navbar.classList.remove("navbar-white");
                navLogo.classList.add("navbar-brand-logo-white");
            }
        }


        window.addEventListener('scroll', toggleVisible);
    });

    const [showDropdownMenu, setshowDropdown] = useState(false)

    const showDropdown = (e)=>{
        setshowDropdown(!showDropdownMenu);
    }
    const hideDropdown = e => {
        setshowDropdown(false);
    }

    return (
        <Nav
            className="navbar fixed-top navbar-expand-lg"
            id="nav-main">
            <div className='container-fluid'>
                <Link
                    className="navbar-brand"
                    to={"/"}>
                    <img
                        src={LogoFlattImage}
                        alt="Logo Przychodni Red-Vet"
                        className="navbar-brand-logo navbar-brand-logo-white"
                        id="nav-logo" />
                </Link>
                <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarNav">

                    <ul className="navbar-nav mr-auto">
                        <Nav.Item as='li'>
                            <Nav.Link classname='nav-link' href={'/'} className="nav-link"><AiOutlineHome /></Nav.Link >
                        </Nav.Item>
                        <NavDropdown 
                            title='O nas' 
                            id='nav-dropdown'
                            show={showDropdownMenu}
                            onMouseEnter={showDropdown} 
                            onMouseLeave={hideDropdown}>
                            <Nav.Item as='li'>
                                <Nav.Link classname='nav-link' href={'/personel'} className="nav-link">Personel</Nav.Link >
                            </Nav.Item>
                            <Nav.Item as='li'>
                                <Nav.Link classname='nav-link' href={'/przychodnia'} className="nav-link">Przychodnia</Nav.Link >
                            </Nav.Item>
                        </NavDropdown>
                        <Nav.Item as='li'>
                                <Nav.Link classname='nav-link' href={'/przychodnia'} className="nav-link">Usługi</Nav.Link >
                            </Nav.Item>
                        <Nav.Item as='li'>
                            <a classname='nav-link' href={'#sklep'} className="nav-link">Sklep</a >
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Nav.Link classname='nav-link' href={'/aktualnosci'} className="nav-link">Aktualności</Nav.Link >
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Nav.Link classname='nav-link' href={'#opinie'} className="nav-link">Opinie</Nav.Link >
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Nav.Link classname='nav-link' href={'#kontakt'} className="nav-link">Kontakt</Nav.Link >
                        </Nav.Item>


                    </ul>
                </div>
            </div>
        </Nav>
    )
}

export default Menu
