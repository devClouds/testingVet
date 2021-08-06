import React from 'react'
import { Row } from 'react-bootstrap'
import Section from './Section'
import Service from './Service'

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
                <Service title='Szczepienia' imagePath={SyringeImage} />
                <Service title='Kastracja' imagePath={ScrissorsImage} />
                <Service title='Chirurgia tkanek' imagePath={ScalpelImage} />
                <Service title='Wizyty domowe' imagePath={CarImage} />

                <Service title='Paszport' imagePath={PassportImage} />
                <Service title='Czipowanie' imagePath={ChipImage} />
                <Service title='Profilaktyka' imagePath={BeforeImage} />
                <Service title='Badania laboratoryjne' imagePath={MicroscopeImage} />
            </Row>
        </Section>
    )
}

export default SectionServices
