import React, { Fragment } from 'react'

import SectionBuildingIntroduction from './SectionBuildingIntroduction'
import SectionBuildingHistory from './SectionBuildingHistory'
import SectionBuildingOverview from './SectionBuildingOverview'
import SectionBuildingSchedule from './SectionBuildingSchedule'

function Main() {
    return (
        <Fragment>
            <SectionBuildingIntroduction/>
            <SectionBuildingHistory/>
            <SectionBuildingOverview/>
            <SectionBuildingSchedule/>
        </Fragment>
    )
}

export default Main
