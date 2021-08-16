import React, { useState, useEffect } from 'react'
import { Nav, Navbar, NavDropdown, Toggle, Collapse, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'

import LogoFlattImage from '../img/Red-Vet-Logo-Flatt.png'

function Menu() {

    //Shrink nav on scroll
    const shrinkNav = () => {
        const distanceY = window.pageXOffset || document.documentElement.scrollTop,
        shrinkOn = 200;
        if (distanceY > shrinkOn){
            setsmallerNav(true)
          } 
          else if (distanceY <= shrinkOn){
            setsmallerNav(false)
          }
        };
    const [smallerNav, setsmallerNav] = useState(false)


    //Mobile menu
    const [mobileMenu, toggleMobile] = useState(false);


    //Show dropdown on hover
    const [dropdownMenu, setdropdownMenu] = useState(false)

    const showDropdown = (e) => {
       let width = window.innerWidth;
        if (width >= 767) {
            setdropdownMenu(!dropdownMenu);
        }
    }
    const hideDropdown = (e) => {
        setdropdownMenu(false);
    }

    //show dropdown on click in mobile screen
    const [mobileDropdownMenu, setmobileDropdownMenu] = useState(false)

    const toggleMobileDropdown = (e) => {
        let width = window.innerWidth;
        if (width < 767) {
        setmobileDropdownMenu(!mobileDropdownMenu)
        }
    }


    window.addEventListener('scroll', shrinkNav);


    return (
        <div className={`nav-wrapper start-header start-style fixed-top ${smallerNav ? 'smaller' : ''}`}>
            <Navbar expand="md">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src={LogoFlattImage}
                            alt="Logo Przychodni Red-Vet"
                            className="navbar-brand-logo"
                            id="nav-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="mobile-nav"
                        onClick={() => toggleMobile(!mobileMenu)}
                        className={mobileMenu ? 'open' : 'close'} />
                    <Navbar.Collapse id="mobile-nav">
                        <Nav className="ms-auto" as='ul'>
                            <NavDropdown
                                as='li'
                                title='O nas'
                                id='nav-dropdown'
                                className={`ps-4 ps-md-0 ms-0 ms-md-4 ${mobileDropdownMenu ? 'open' : ''}`}
                                show={dropdownMenu || mobileDropdownMenu}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                                onClick={toggleMobileDropdown}>
                                <NavDropdown.Item href={'/personel'} >Personel</NavDropdown.Item>
                                <NavDropdown.Item href={'/przychodnia'} >Przychodnia </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item as='li' className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <Nav.Link classname='nav-link' href={'/uslugi'} className="nav-link">Usługi</Nav.Link >
                            </Nav.Item>
                            <Nav.Item as='li' className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <a classname='nav-link' href={'#sklep'} className="nav-link">Sklep</a >
                            </Nav.Item>
                            <Nav.Item as='li' className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <Nav.Link classname='nav-link' href={'/aktualnosci'} className="nav-link">Aktualności</Nav.Link >
                            </Nav.Item>
                            <Nav.Item as='li' className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <Nav.Link classname='nav-link' href={'#opinie'} className="nav-link">Opinie</Nav.Link >
                            </Nav.Item>
                            <Nav.Item as='li' className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <Nav.Link classname='nav-link' href={'#kontakt'} className="nav-link">Kontakt</Nav.Link >
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu
