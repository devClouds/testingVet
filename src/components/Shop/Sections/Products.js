import React from 'react'
import { Row } from 'react-bootstrap'
import Section from '../../Section'

import ProductsList from '../../../json/Products.json'

import SectionTitle from '../../SectionTitle'
import Fade from 'react-reveal/Fade'
import Product from './Product/Product';

function Products() {
    return (
        <Section id='oferta' name='subpage'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Nasza oferta' />
                <Fade bottom>
                    <p className='margined'>W sklepie znajdującym się w przychodni Red-Vet znajdziesz szeroki zakres produktów. Poniżej prezentujemy je w bardziej szczegółowej formie. Przekonaj się sam! </p>
                </Fade>
            </div>
            <Row>

                {ProductsList.map((news, key) => {
                    return <Product
                        key={key}
                        title={news.title}
                        text={news.text}
                        imagePath={news.imagePath}
                        alt={news.alt}
                    />
                })}
            </Row>
        </Section>
    )
}

export default Products
