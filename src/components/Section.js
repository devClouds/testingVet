import React from 'react'
import { Container } from 'react-bootstrap'

function Section(props) {
    return (
        <section id={props.name}>
            <div className={props.name + '-wrapper'}>
                <Container>

                </Container>
            </div>
        </section>
    )
}


export default Section
