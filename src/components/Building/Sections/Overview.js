import React from 'react'
import Section from '../../Section'
import SectionTitle from '../../SectionTitle'
import BuildingCarousel from './Carousel/BuildingCarousel'

import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

function Overview() {
    return (
        <Section id='budynek' name='building-overview'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Red-Vet od środka' />
                <Fade bottom>
                    <p className='margined'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo. Aenean lacinia, nunc nec euismod tincidunt, velit neque hendrerit urna, ac tempor lorem ex quis ex.</p>
                </Fade>
                <Slide bottom>
                    <BuildingCarousel/>
                </Slide>
            </div>
        </Section>
    )
}

export default Overview
