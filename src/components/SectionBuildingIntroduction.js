import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Section from './Section'

import buildingImage from '../img/Building.jpg'
import staffImage from '../img/About-Photo.jpg'
import SectionTitle from './SectionTitle'

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'

function SectionBuildingIntroduction() {
    return (
        <Section id='wstęp' name='building-introduction'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Czym się zajmujemy?' />
                <Fade bottom>
                    <p className='margined'>Przychodnia weterynaryjna Red-Vet to zlokalizowana w centrum Głuszycy placówka, w której realizowane są usługi weterynaryjne dla szerokiego spektrum zwierząt. Najczęściej trafiają do nas oczywiście małe zwierzęta domowe: koty, psy, ptaki, zółwie czy świnki morskie. Z racji na to, iż nasza przychodnia współpracuje także z okolicznymi gminami zdarza się jednak, że w naszych progach pojawiają sie bardziej osobliwi goście jak choćby sarny, dziki, bociany, a nawet wilk.</p>
                    <p>Niezależnie jednak od tego czy mamy do czynienia ze spokojnym kotkiem czy też dziką sarną zawsze staramy się realizować nasz nadrzędny cel - nieść pomoc medyczną tym zwierzętom, które tego potrzebują.</p>
                </Fade>

            </div>
        </Section>
    )
}

export default SectionBuildingIntroduction