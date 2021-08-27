import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Section from './Section'

import SectionTitle from './SectionTitle'

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'

import shopInsideImage from '../img/Shop-Inside.jpg'
import shopInsideImage2 from '../img/Shop-Inside-2.jpg'



function SectionShopIntroduction() {
    return (
        <Section id='wstęp' name='shop-introduction'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='O sklepie' />
            </div>
            <Row>
                <Col md={6} className='text-center text-md-start' >
                    <Fade bottom>
                        <div>
                            <p>W 2021 r. przychodnia rozszerzyła zakres swoich usług otwierając na terenie budynku sklep z artykułami dla zwierząt. Dzięki temu wszystkie odwiedzające nas osoby mogą wygodnie i na miejscu nabyć produkty dla swoich domowych towarzyszy.</p>
                            <p className='margined'><strong>W naszym asortymencie znajdują się m.in</strong>
                                <ul class='products-list'>
                                    <li>specjalistyczne karmy wysokiej jakości</li>
                                    <li>słodkie oraz mięsne smakołyki</li>
                                    <li>odżywki i preparaty pielęgnacyjne</li>
                                    <li>środki ochronne przeciw pasożytom</li>
                                    <li>obroże, smycze oraz kagańce</li>
                                    <li>transportery</li>
                                    <li>zabawki oraz inne akcesoria </li>
                                </ul>
                            </p>
                            <a href='#oferta' className='button-small mb-4 mb-md-0'>Zobacz szczegółowy asortyment</a>
                        </div>
                    </Fade >
                </Col>
                <Col md={6} className='text-center text-md-start' >
                    <Bounce right>
                        <div>
                            <img className='img-size' src={shopInsideImage} alt='Widok na całość sklepu' />
                        </div>
                    </Bounce >
                </Col>
                </Row>
                <Row className='mt-5 flex-wrap-reverse'>
                <Col md={6} className='text-center text-md-start' >
                    <Bounce left>
                        <div>
                            <img className='img-size' src={shopInsideImage2} alt='Widok na ladę sklepową oraz produkty' />
                        </div>
                    </Bounce >
                </Col>
                <Col md={6} className='text-center text-md-start' >
                    <Fade bottom>
                        <div>
                            <p>Serdecznie zapraszamy gości przychodni oraz osoby z zewnątrz do odwiedzania naszego sklepu. Nasz personel chętnie oraz profesjonalnie doradzi w zakupie odpowiednich produktów dostosowanych do potrzeb konkretnego zwierzaka.</p>
                            <p>Wszystko zaś wygodnie, szybko i fachowo oraz w konkurencyjnych cenach.</p>
                        </div>
                    </Fade >
                </Col>
            </Row>
        </Section>
    )
}

export default SectionShopIntroduction