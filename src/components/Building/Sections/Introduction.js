import React from 'react'
import Section from '../../Section'

import SectionTitle from '../../SectionTitle'

import Fade from 'react-reveal/Fade'

function Introduction() {
    return (
        <Section id='wstęp' name='building-introduction'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Czym się zajmujemy?' />
                <Fade bottom>
                    <p className='margined'>W Red-Vet świadczymy usługi weterynaryjne zwierzętom wszelkiej maści. W większości przypadków zjawiają sie u nas oczywiście mniejsze lub większe zwierzęta towarzyszące takie jak: koty, psy, ptaki, zółwie czy świnki morskie, którym towarzyszą ich troskliwi właściciele. Nasza placówka współpracuje jednak również z lokalnymi samorządami zapewniając opiekę medyczną dzikim zwierzętom, które z różnych powodów mogą takiej opieki potrzebować. Nie dziwią nas zatem wezwania do rannych saren, jeży, szopów, dzików, a nawet wilków</p> 
                    <p>Niezależnie od pochodzenia, gabarytów i usposobienia zwierzęcia staramy się jednak przede wszystkim leczyć, ale także doradzać i uświadamić właścicieli w kwestiach opieki i wychowania ich pupili. Lubimy swoją pracę i cieszymy się mogąc pomagać innym.</p>
                </Fade>

            </div>
        </Section>
    )
}

export default Introduction