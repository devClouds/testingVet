import React from 'react'
import { Col, Row, Accordion } from 'react-bootstrap'
import Section from './Section'

import News from './News';

function SectionNewsSubpage() {
    return (
        <Section id='aktualnosci' name='subpage'>
            <Row className='align-items-stretch'>
                <News title='Przychodnia nieczynna 15.08 z powodu choroby' date='5.08.2020'> Teraz tu jestem i zamierzam napisać pewną wiadomość na temat pierwszej aktualności jeśli tylko mi się uda ponieważ zamierzam sprawdzić ile tekstu rzeczywiście tu zostanie widoczne. Chcę wiedzieć ile tekstu rzeczywiście się wyświetlia ile nieTeraz tu jestem i zamierzam napisać pewną wiadomość na temat pierwszej aktualności jeśli tylko mi się uda ponieważ zamierzam sprawdzić ile tekstu rzeczywiście tu zostanie widoczne. Chcę wiedzieć ile tekstu rzeczywiście się wyświetlia ile nieTeraz tu jestem i zamierzam napisać pewną wiadomość na temat pierwszej aktualności jeśli tylko mi się uda ponieważ zamierzam sprawdzić ile tekstu rzeczywiście tu zostanie widoczne. Chcę wiedzieć ile tekstu rzeczywiście się wyświetlia ile nie </News>
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
