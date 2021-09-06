import React from 'react'
import Section from './Section'
import { Col, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'

import Fade from 'react-reveal/Fade'

function SectionShop() {
    return (
        <Section id='sklep' name="shop" paralax='true'>
            <Row className='justify-content-end'>
                <Col sm={5} className='paralax-content'>
                    <SectionTitle title='Sklep' />
                    <Fade bottom >
                    <p>Osoby odwiedzające naszą przychodnią mogą nie tylko skorzystać z szerokiego zakresu naszych usług medycznych, ale w międzyczasie odwiedzić nasz sklep z bogatym asortymentem produktów dla zwierząt domowych.</p>
                    <p>Nie wychodząc z przychodni, wygodnie i szybko nabędą Państwo zarówno wysokojakościową karmę znanych producentów, słodkie przysmaki, środki higieny zwierzęcej, a także zabawki dla swoich milusińskich -  wszystko zaś pod okiem i za radą naszego personelu. Serdecznie zapraszamy </p>
                    <a className='button-small mt-3' href={'/sklep'} >Przejdź do sklepu</a >
                    </Fade>
                </Col>
            </Row>
        </Section>
    )
}

export default SectionShop
