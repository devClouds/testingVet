import React, { Fragment } from 'react'

import Introduction from './Sections/Introduction'
import History from './Sections/History'
import Overview from './Sections/Overview'
import Schedule from './Sections/Schedule'

function Main() {
    return (
        <Fragment>
            <Introduction/>
            <History/>
            <Overview/>
            <Schedule/>
        </Fragment>
    )
}

export default Main
