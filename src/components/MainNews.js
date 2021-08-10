import React from 'react'
import { Row } from 'react-bootstrap'

import News from './News'

function MainNews() {
    return (
        <Row>
            <News title='kotek'/>
            <News title='piesek'/>
            <News title='ryba'/>
        </Row>
    )
}

export default MainNews
