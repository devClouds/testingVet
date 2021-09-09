import React, { Fragment } from 'react'

import About from './Sections/About'
import News from './Sections/News'
import Services from './Sections/Services'
import Shop from './Sections/Shop'
import Contact from './Sections/Contact'
import Reviews from './Sections/Reviews'

function Main() {
    return (
        <Fragment>
            <About/>
            <News/>
            <Services/>
            <Shop/>
            <Contact/>
            <Reviews/>
        </Fragment>
    )
}

export default Main
