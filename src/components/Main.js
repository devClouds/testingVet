import React, { Fragment } from 'react'

import SectionAbout from './SectionAbout'
import SectionContact from './SectionContact'
import SectionNews from './SectionNews'
import SectionServices from './SectionServices'
import SectionShop from './SectionShop'


function Main() {
    return (
        <Fragment>
            <SectionAbout/>
            <SectionNews/>
            <SectionServices/>
            <SectionShop/>
            <SectionContact/>
        </Fragment>
    )
}

export default Main
