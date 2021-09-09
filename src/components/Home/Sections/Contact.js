import React from 'react'
import Section from '../../Section'
import { Col, Row } from 'react-bootstrap'
import SectionTitle from '../../SectionTitle'

import FacebookIcon from '../../../img/icons/facebook.png'
import MailIcon from '../../../img/icons/mail.png'
import MarkerIcon from '../../../img/icons/marker.png'
import PhoneIcon from '../../../img/icons/phone.png'

import Bounce from 'react-reveal/Bounce';

function Contact() {
    return (
        <Section id='kontakt' name='contact'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Kontakt' />
            </div>
            <Row>
                <Col md={6} className='mb-4 mb-md-0'>
                    <Bounce left>
                        <div id="contact-info">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <strong>Przychodnia weterynaryjna<br />Red-Vet</strong>
                                    </h5>
                                    <div className="card-text">
                                        <p><img className='icon' src={MarkerIcon} alt='Ikona markera' />ul. Łukasiewicza 10<br />
                                            <span className='indent'></span>58-340 Głuszyca
                                        </p>
                                        <p><a href='mailto:red-vet@wp.pl'>
                                            <img className='icon' src={MailIcon} alt='Ikona maila' />red-vet@wp.pl
                                        </a></p>
                                        <p><a href='tel:721-452-252'>
                                            <img className='icon' src={PhoneIcon} alt='Ikona telefonu' />721-452-252
                                        </a></p>
                                        <p><a href='https://www.facebook.com/Przychodnia-Weterynaryjna-Red-Vet-w-G%C5%82uszycy-110122420607197'>
                                            <img className='icon' src={FacebookIcon} alt='Logo Facebooka' />Facebook
                                        </a></p><br />
                                        <p><strong>Godziny przyjęć:</strong></p>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className='pe-3'>Poniedziałek:</td>
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

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Bounce>
                </Col>
                <Col md={6}>
                    <Bounce right>
                        <iframe
                            id='google-map'
                            title='mapa-google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.7540608469903!2d16.359681415981157!3d50.68738997950874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e5aad33727de9%3A0x92ea0a0e7ca1369!2sIgnacego%20%C5%81ukasiewicza%2010%2C%2058-340%20G%C5%82uszyca!5e0!3m2!1spl!2spl!4v1583257447164!5m2!1spl!2spl"
                            width="100%" height="100%" frameBorder="0" /*style="border:0;"*/ allowFullScreen="">
                        </iframe>
                    </Bounce>
                </Col>
            </Row>
        </Section>
    )
}
export default Contact
