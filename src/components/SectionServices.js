import React from 'react'
import { Row } from 'react-bootstrap'
import Section from './Section'
import Service
    from './Service'


import SyringeImage from '../img/services/syringe.svg'
import CarImage from '../img/services/car.svg'
import ChipImage from '../img/services/chip.svg'
import PassportImage from '../img/services/passport.svg'
import ScalpelImage from '../img/services/scalpel.svg'
import MicroscopeImage from '../img/services/microscope.svg'
import ScrissorsImage from '../img/services/scrissors.svg'
import BeforeImage from '../img/services/before.svg'

function SectionServices() {
    return (
        <Section name='services'>
            <div className='justify-content-center text-center'>
                <h2 className="paragraph-title-green">Nasze usługi</h2>
                <p className='margined'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo. Aenean lacinia, nunc nec euismod tincidunt, velit neque hendrerit urna, ac tempor lorem ex quis ex.
                </p>
            </div>
            <Row className='justify-content-center'>
                <Service


                    title='Szczepienia'
                    imagePath={SyringeImage} >

                    Szczepienia to jedna z naszych najważniejszych usług. Szczepimy przeciwko wszystkim rodzajom chorób - od tych śmiertelnych, poprzez zakaźne, a na lekkich skończywszy. Śmiertelność zabiegu w naszej przychodni wynosi jedyne 30%.

                </Service>
                <Service
                    title='Kastracja'
                    imagePath={ScrissorsImage} >

                    Kastrację wykonujemy z jeszcze większą przyjemnością niż zwykle ponieważ kochamy ucinać jajka aż po same końce. Czasem od lewej, czasem od prawej - ważne by się jajec pozbyć na zawsze.
                </Service>
                <Service
                    title='Chirurgia tkanek'
                    imagePath={ScalpelImage} >
                </Service>
                <Service
                    title='Wizyty domowe'
                    imagePath={CarImage} >
                </Service>

                <Service
                    title='Paszport'
                    imagePath={PassportImage} >
                </Service>
                <Service
                    title='Czipowanie'
                    imagePath={ChipImage} >
                </Service>
                <Service
                    title='Profilaktyka'
                    imagePath={BeforeImage} >
                </Service>
                <Service
                    title='Badania laboratoryjne'
                    imagePath={MicroscopeImage} >
                </Service>
            </Row>
        </Section>
    )
}

export default SectionServices
