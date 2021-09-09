import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Section from '../../Section'
import SectionTitle from '../../SectionTitle'

import Fade from 'react-reveal/Fade'

function History() {
    return (
        <Section id='historia' name='building-history' paralax='true'>
            <Row>
                <Col sm={5} className='paralax-content'>
                    <SectionTitle title='Nasze początki' />
                    <Fade bottom>
                    <p>Właścicielką oraz założycielką przychodni Red-Vet jest pani dr weterynarii Anna Redliacka, która po zakończeniu studiów i dwóch latach pracy w Głuszycy postanowiła otworzyć własną placówkę, która stanie się miejscem przyjaznym zwierzętom.</p>
                    <p>W roku 2020 zakupiła ona budynek zlokalizowany przy ul. Łukasiewicza 10 w Głuszycy, który przeszedł gruntowny remont oraz modernizację umożliwiające przyjmowanie pacjentów z zachowaniem standardów higieny i sterylności.</p>
                    <p>Od tego czasu przychodnia stale się rozwija: zakupiono nowy sprzęt diagnostyczny i laboratoryjny umożliwiający prowadzenie dodatkowych badań na miejscu, a w połowie 2021 roku otwarto na miejscu sklep z produktami przeznaczonymi dla zwierząt.</p>
                    </Fade>         
                </Col>
            </Row>
        </Section>
    )
}

export default History
