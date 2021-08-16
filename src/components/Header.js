import React from 'react'
import { HashLink } from 'react-router-hash-link';

function Header() {
        return (
            <section id="header">
                <div className='header-wrapper'>
                    <div>
                        <p className="sub-header-text animation-top">Przychodnia weterynaryjna w Głuszycy</p>
                        <p className="header-text animation-top"> Red - Vet</p>
                        <HashLink to='/#kontakt' className="button-small animation-top">Skontaktuj się z nami</HashLink>
                    </div>
                </div>
            </section>
        )
}

export default Header
