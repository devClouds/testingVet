import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Section from '../../Section'
import { HashLink } from 'react-router-hash-link';

import SectionTitle from '../../SectionTitle'

import Bounce from 'react-reveal/Bounce';

import shopInsideImage from '../../../img/Shop-Inside.jpg'



function Introduction() {
    return (
        <Section id='wstęp' name='shop-introduction'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='O sklepie' />
            </div>
            <Row>
                <Col lg={6} className='text-center text-lg-start' >
                    <Bounce left>
                        <div>
                            <p>W 2021 r. przychodnia rozszerzyła zakres swoich usług otwierając na terenie budynku sklep z artykułami dla zwierząt. Dzięki temu wszystkie odwiedzające nas osoby mogą wygodnie i na miejscu nabyć produkty dla swoich domowych towarzyszy.</p>
                            <p>Serdecznie zapraszamy do odwiedzania naszego sklepu. Nasz personel chętnie oraz profesjonalnie doradzi w zakupie odpowiednich produktów dostosowanych do potrzeb konkretnego zwierzaka.</p>
                            <p><strong>W naszym asortymencie znajdują się m.in</strong></p>
                            
                                <ul class='products-list'>
                                    <li>specjalistyczne karmy wysokiej jakości</li>
                                    <li>słodkie oraz mięsne smakołyki</li>
                                    <li>odżywki i preparaty pielęgnacyjne</li>
                                    <li>środki ochronne przeciw pasożytom</li>
                                    <li>obroże, smycze oraz kagańce</li>
                                    <li>transportery</li>
                                    <li>zabawki oraz inne akcesoria </li>
                                </ul>
                            
                            <HashLink to='#oferta' className='button-small mb-4'>Zobacz szczegółowy asortyment</HashLink>       
                        </div>
                    </Bounce >
                </Col>
                <Col lg={6} className='text-center text-md-start' >
                    <Bounce right>
                        <div>
                            <img src={shopInsideImage} alt='Widok na całość sklepu' />
                        </div>
                    </Bounce >
                </Col>
                </Row>
        </Section>
    )
}

export default Introduction