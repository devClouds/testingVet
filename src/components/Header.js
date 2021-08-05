import React from 'react'

function Header() {
        return (
            <section id="header">
                <div className='header-wrapper'>
                    <div>
                        <p className="sub-header-text animation-top">Przychodnia weterynaryjna w Głuszycy</p>
                        <p className="header-text animation-top"> Red - Vet</p>
                        <a href='#contact' className="button-small animation-top">Skontaktuj się z nami</a>
                    </div>
                </div>
            </section>
        )
}

export default Header
