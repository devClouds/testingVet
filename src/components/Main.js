import React, { Fragment } from 'react'

import SectionAbout from './SectionAbout'
import SectionContact from './SectionContact'
import SectionNews from './SectionNews'
import SectionReviews from './SectionReviews'
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
            <SectionReviews/>
        </Fragment>
    )
}

export default Main
