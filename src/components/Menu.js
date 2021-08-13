import React, { useState, useEffect } from 'react'
import { Nav, Navbar, NavDropdown, Toggle, Collapse, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'

import LogoFlattImage from '../img/Red-Vet-Logo-Flatt.png'

function Menu() {



    const [smallerNav, setsmallerNav] = useState(false)

    //Mobile menu
    const [mobileMenu, toggleMobile] = useState(false);

    //Show dropdown on hover
    const [dropdownMenu, setdropdownMenu] = useState(false)

    const showDropdown = (e) => {
       //let width = window.innerWidth;
        //if (width > 767) {
            setdropdownMenu(!dropdownMenu);
       // }
    }
    const hideDropdown = (e) => {
        setdropdownMenu(false);
    }





    document.addEventListener('DOMContentLoaded', function () {


        //var navbar = document.getElementById('nav-wrapper');


        let navLogo = document.getElementById("nav-logo");

        //var change = navbar.offsetTop;


        //let scroll = navbar.offsetTop;

        const toggleVisible = () => {
            // if (window.pageYOffset > 15) {
            //     navbar.classList.add("navbar-white");
            //     navLogo.classList.remove("navbar-brand-logo-white");
            //     alert('yes')

            // } else {
            //     navbar.classList.remove("navbar-white");
            //     navLogo.classList.add("navbar-brand-logo-white");
            // }
            var navbar = document.getElementById('nav-wrapper');
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                navbar.classList.remove('start-style').classList.add("scroll-on");
            } else {
                navbar.classList.remove("scroll-on").classList.add('start-style');
             }
       }

       window.addEventListener('scroll', toggleVisible);
    });


    return (
        // <div className='nav-wrapper fixed-top nav-start' id='nav-wrapper'>
        //     <div className='container-fluid'>
        //         <Nav
        //             className="navbar navbar-expand-md"
        //             id="nav-main">
        //             <Navbar.Brand href="/">
        //                 <img
        //                     src={LogoFlattImage}
        //                     alt="Logo Przychodni Red-Vet"
        //                     className="navbar-brand-logo"
        //                     id="nav-logo" />
        //             </Navbar.Brand>
        //             <button 
        //                 className="navbar-toggler" 
        //                 type="button" data-toggle="collapse" 
        //                 data-target="#navbarNav" 
        //                 aria-controls="navbarNav" 
        //                 aria-expanded="false" 
        //                 aria-label="Toggle navigation">
        // 					<span className="navbar-toggler-icon"></span>
        // 			</button>
        //             <div 
        //                 className=" collapse navbar-collapse justify-content-end"
        //                 id="navbarNav">

        //                 <ul className="navbar-nav mr-auto">
        //                     {/* <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
        //                         <Nav.Link classname='nav-link' href={'/'} className="nav-link"><AiOutlineHome /></Nav.Link >
        //                     </Nav.Item> */}
        // <NavDropdown
        //     title='O nas'
        //     id='nav-dropdown'>
        //     {/*show={showDropdownMenu}*/}
        //     {/*} onMouseEnter={showDropdown}*/}
        //     {/*} onMouseLeave={hideDropdown}*/}
        //     <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
        //         <Nav.Link classname='nav-link' href={'/personel'} className="nav-link">Personel</Nav.Link >
        //     </Nav.Item>
        //     <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
        //         <Nav.Link classname='nav-link' href={'/przychodnia'} className="nav-link">Przychodnia</Nav.Link >
        //     </Nav.Item>
        // </NavDropdown>
        // <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
        //     <Nav.Link classname='nav-link' href={'/przychodnia'} className="nav-link">Usługi</Nav.Link >
        // </Nav.Item>
        // <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
        //     <a classname='nav-link' href={'#sklep'} className="nav-link">Sklep</a >
        // </Nav.Item>
        // <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
        //     <Nav.Link classname='nav-link' href={'/aktualnosci'} className="nav-link">Aktualności</Nav.Link >
        // </Nav.Item>
        // <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
        //     <Nav.Link classname='nav-link' href={'#opinie'} className="nav-link">Opinie</Nav.Link >
        // </Nav.Item>
        // <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
        //     <Nav.Link classname='nav-link' href={'#kontakt'} className="nav-link">Kontakt</Nav.Link >
        // </Nav.Item>


        //                 </ul>
        //             </div>
        //         </Nav>
        //     </div>
        // </div>
        <div className='nav-wrapper start-header start-style fixed-top'>
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
                        <Nav className="ms-auto">
                            <NavDropdown
                                title='O nas'
                                id='nav-dropdown'
                                className='ps-4 ps-md-0 ms-0 ms-md-4'
                                show={dropdownMenu}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}>
                                <NavDropdown.Item href={'/personel'} >Personel</NavDropdown.Item>
                                <NavDropdown.Item href={'/przychodnia'} >Przychodnia </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <Nav.Link classname='nav-link' href={'/uslugi'} className="nav-link">Usługi</Nav.Link >
                            </Nav.Item>
                            <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <a classname='nav-link' href={'#sklep'} className="nav-link">Sklep</a >
                            </Nav.Item>
                            <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <Nav.Link classname='nav-link' href={'/aktualnosci'} className="nav-link">Aktualności</Nav.Link >
                            </Nav.Item>
                            <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
                                <Nav.Link classname='nav-link' href={'#opinie'} className="nav-link">Opinie</Nav.Link >
                            </Nav.Item>
                            <Nav.Item className='ps-4 ps-md-0 ms-0 ms-md-4'>
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
