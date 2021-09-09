import React from 'react'
import { Table } from 'react-bootstrap'
import Section from '../../Section'

import SectionTitle from '../../SectionTitle'

import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

function Schedule() {
    return (
        <Section id='wstęp' name='building-schedule'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Jak pracujemy' />
                <Fade bottom>
                    <p className='margined'>Nasza przychodnia jest czynna dla klientów w następujących dniach tygodnia:</p>
                </Fade>
                <Slide bottom>
                    <Table className='contact-table mb-4' striped bordered hover size='sm'>
                        <tbody>
                            <tr>
                                <td>Poniedziałek:</td>
                                <td>10:00 - 18:00</td>
                            </tr>
                            <tr>
                                <td>Wtorek:</td>
                                <td>10:00 - 18:00</td>
                            </tr>
                            <tr>
                                <td>Środa:</td>
                                <td>10:00 - 18:00</td>
                            </tr>
                            <tr>
                                <td>Czwartek:</td>
                                <td>10:00 - 16:00</td>
                            </tr>
                            <tr>
                                <td>Piątek:</td>
                                <td>10:00 - 18:00</td>
                            </tr>
                            <tr>
                                <td>Sobota:</td>
                                <td>10:00 - 13:00</td>
                            </tr>
                            <tr>
                                <td>Niedziela:</td>
                                <td>nieczynne</td>
                            </tr>
                        </tbody>
                    </Table>
                </Slide>
                <div class="alert alert-danger" role="alert">
                <Fade bottom>
                        <p>W pilnych przypadkach umożliwiamy także wizytę poza standardowymi godzinami pracy. W takich przypadkach prosimy jednakże o wcześniejsze umówienie takiej wizyty na miejscu, telefonicznie lub mailowo.</p>
                        <p>Na tych samych zasadach realizujemy także wizyty domowe u naszych klientów.</p>
                </Fade>
                </div>
            </div>
        </Section>
    )
}

export default Schedule