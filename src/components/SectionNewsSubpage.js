import React from 'react'
import { Col, Row, Accordion } from 'react-bootstrap'
import Section from './Section'

import News from './News';

function SectionNewsSubpage() {
    return (
        <Section id='aktualnosci' name='subpage'>
            <Row className='align-items-stretch'>
                <News title='Przychodnia nieczynna 15.08' date='5.08.2020'></News>
                <News title='Trivia do adopcji' date='5.08.2020'></News>
                <News title='Sklep otwarty' date='5.08.2020'></News>
                <News title='kotek' date='5.08.2020'></News>
                <News title='piesek' date='5.08.2020'></News>
                <News title='ryba' date='5.08.2020'></News>
                <News title='kotek' date='5.08.2020'></News>
                <News title='piesek' date='5.08.2020'></News>
                <News title='ryba' date='5.08.2020'></News>

            </Row>
        </Section>
    )
}

export default SectionNewsSubpage
