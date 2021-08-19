import React from 'react'
import { Row } from 'react-bootstrap'
import Section from './Section'
import Service from './Service'
import SectionTitle from './SectionTitle'


import Fade from 'react-reveal/Fade'
import BuildingCarousel from './BuildingCarousel'

function SectionBuildingOverview() {
    return (
        <Section id='budynek' name='building-overview'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Red-Vet od środka' />
                <Fade bottom>
                    <p className='margined'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo. Aenean lacinia, nunc nec euismod tincidunt, velit neque hendrerit urna, ac tempor lorem ex quis ex.</p>
                </Fade>
                <BuildingCarousel/>
            </div>
        </Section>
    )
}

export default SectionBuildingOverview
