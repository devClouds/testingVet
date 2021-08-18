import React from 'react'
import Slide from 'react-reveal/Slide'

function HeaderSubpage(props) {
    return (
        <section id="header-subpage">
            <div className='header-subpage-wrapper'>
                <div>
                    <Slide top cascade>
                        <div>
                            <p className="header-text">{props.title}</p>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    )
}

export default HeaderSubpage
