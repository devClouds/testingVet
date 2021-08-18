import React from 'react'
import { HashLink } from 'react-router-hash-link';
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'



function Header() {
    return (
        <section id="header">
            <div className='header-wrapper'>
                <div>
                    <Slide top cascade>
                        <div>
                            <p className="sub-header-text">Przychodnia weterynaryjna w Głuszycy</p>
                            <p className="header-text"> Red - Vet</p>
                        </div>
                    </Slide>
                    <Fade bottom>
                        <HashLink to='/#kontakt' className="button-small">Skontaktuj się z nami</HashLink>
                    </Fade>

                </div>
            </div>
        </section>
    )
}

export default Header
