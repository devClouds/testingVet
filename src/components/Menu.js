import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';


import LogoFlattImage from '../img/Red-Vet-Logo-Flatt.png';

function Menu() {

    //Shrink nav on scroll
    const shrinkNav = () => {
        const distanceY = window.pageXOffset || document.documentElement.scrollTop,
            shrinkOn = 200;
        if (distanceY > shrinkOn) {
            setsmallerNav(true)
        }
        else if (distanceY <= shrinkOn) {
            setsmallerNav(false)
        }
    };
    const [smallerNav, setsmallerNav] = useState(false)


    //Mobile menu
    const [expanded, setExpanded] = useState(false);


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

    //Show dropdown on click in mobile screen
    const [mobileDropdownMenu, setmobileDropdownMenu] = useState(false)

    const toggleMobileDropdown = (e) => {
        let width = window.innerWidth;
        if (width < 767) {
            setmobileDropdownMenu(!mobileDropdownMenu);
        }
    }

    //Hide mobile dropdown when window gets resize bigger
    const closeMobileDropdownOnResize = (e) => {
        let width = window.innerWidth;
        if (width >= 767) {
            setmobileDropdownMenu(false);
        }
    }

    window.addEventListener('scroll', shrinkNav);
    window.addEventListener('resize', closeMobileDropdownOnResize);

    return (
        <div className={`nav-wrapper start-header start-style fixed-top ${smallerNav ? 'smaller' : ''}`}>
            <Navbar expand="md"
                    expanded={expanded}>
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
                        onClick={() => setExpanded(expanded ? false : "expanded")}
                        className={expanded ? 'open' : 'close'} />
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
                                <NavDropdown.Item ><NavLink onClick={() => setExpanded(false)} to={'/personel'}>Personel</NavLink></NavDropdown.Item>
                                <NavDropdown.Item ><NavLink onClick={() => setExpanded(false)} to={'/przychodnia'}>Przychodnia</NavLink></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item as='li' className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <NavHashLink
                                    onClick={() => setExpanded(false)}
                                    className='nav-link'
                                    to={'/#uslugi'}
                                >Usługi</NavHashLink >
                            </Nav.Item>
                            <Nav.Item as='li' className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <NavLink
                                    onClick={() => setExpanded(false)}
                                    className='nav-link'
                                    to={'/sklep'} >Sklep</NavLink>
                            </Nav.Item>
                            <Nav.Item as='li' className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <NavLink
                                    onClick={() => setExpanded(false)}
                                    className='nav-link'
                                    to={'/aktualnosci'} >Aktualności</NavLink >
                            </Nav.Item>
                            <Nav.Item as='li' className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <NavHashLink 
                                    onClick={() => setExpanded(false)}
                                    className='nav-link'
                                    to={'/#opinie'} >Opinie</NavHashLink >
                            </Nav.Item>
                            <Nav.Item as='li' className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <NavHashLink 
                                    onClick={() => setExpanded(false)}
                                    className='nav-link'
                                    to={'/#kontakt'} >Kontakt</NavHashLink >
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu
