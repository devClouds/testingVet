import React from 'react'
import { Row } from 'react-bootstrap'
import Section from '../../Section'
import Service from './Service/Service'
import SectionTitle from '../../SectionTitle'

import ServicesList from '../../../json/Services.json'

import Fade from 'react-reveal/Fade'

function Services() {
    return (
        <Section id='uslugi' name='services'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Nasze usługi' />
                <Fade bottom>
                    <p className='margined'>W Red-Vet staramy się na bieżąco podnosić ilość oraz jakość świadczonych przez nas usług. Zapewniamy kompleksowe leczenie, konsultacje specjalistyczne oraz opiekę weterynaryjną dla zwierząt towarzyszących - wszystkie usługi na najwyższym poziomie, co potwierdzają nasi powracający cyklicznie klienci.</p>
                </Fade>
            </div>
            <Row className='justify-content-center'>
                {ServicesList.map((service, key) => {
                    return <Service
                        key={key}
                        title={service.title}
                        text={service.text}
                        path={service.path}
                        alt={service.alt}
                    />
                })}
            </Row>
        </Section>
    )
}

export default Services
