import React from 'react'
import { Col, Row, Accordion } from 'react-bootstrap'
import Section from './Section'

import News from './News';

function SectionNewsSubpage() {
    return (
        <Section id='aktualnosci' name='subpage'>
            <Row>
                <News title='Przychodnia nieczynna 15.08'></News>
                <News title='piesek'></News>
                <News title='ryba'></News>
                <News title='kotek'></News>
                <News title='piesek'></News>
                <News title='ryba'></News>
                <News title='kotek'></News>
                <News title='piesek'></News>
                <News title='ryba'></News>

            </Row>
        </Section>
    )
}

export default SectionNewsSubpage
