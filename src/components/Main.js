import React, { Fragment } from 'react'

import SectionAbout from './SectionAbout'
import SectionContact from './SectionContact'
import SectionNews from './SectionNews'
import SectionShop from './SectionShop'


function Main() {
    return (
        <Fragment>
            <SectionAbout/>
            <SectionNews/>
            <SectionShop/>
            <SectionContact/>
        </Fragment>
    )
}

export default Main
