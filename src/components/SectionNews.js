import React from 'react'
import { Col, Row, Accordion } from 'react-bootstrap'
import Section from './Section'
import SectionTitle from './SectionTitle'

import News from './News'

import Fade from 'react-reveal/Fade'

function SectionNews() {
    return (
        <Section id='aktualnosci' name='news' paralax='true'>
            <Row>
                <Col sm={5} className='paralax-content'>
                    <SectionTitle title='Aktualności' />
                    <Fade bottom>
                        <p>Chcesz dowiedzieć się co u nas nowego? Upewnić się czy jesteśmy dzisiaj otwarci. Poznać zwierzaki, które się u nas pojawiają? Przeczytać nieco ciekawych informacji ze świata weterynarii oraz dbania o zwierzęta. To wszystko oraz znacznie więcej odnajdziesz w tej sekcji</p>
                        <p>Staramy się na bieżąco publikować wszystkie istotne informacje dlatego zachęcamy do zaglądania do sekcji aktualności, by niczego nie przegapić.</p>
                        <a href='/aktualnosci' className='button-small mt-3'>Przejdź do aktualności</a>
                    </Fade>
                </Col>
            </Row>
            {/* <Row>
                <News title='Przychodnia nieczynna 15.08' date='5.08.2020'></News>
                <News title='Trivia do adopcji' date='5.08.2020'></News>
            </Row> */}
        </Section>
    )
}

export default SectionNews
