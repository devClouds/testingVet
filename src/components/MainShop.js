import React, { Fragment } from 'react'

import SectionShopIntroduction from './SectionShopIntroduction'
import SectionShopProducts from './SectionShopProducts'

function MainShop() {
    return (
        <Fragment>
            <SectionShopIntroduction/>
            <SectionShopProducts />
        </Fragment>
    )
}

export default MainShop
