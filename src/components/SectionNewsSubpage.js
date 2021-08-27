import React from 'react'
import { Row } from 'react-bootstrap'
import Section from './Section'

import News from './News';
import NewsList from '../json/News.json'

function SectionNewsSubpage() {
    return (
        <Section id='aktualnosci' name='subpage'>
            <Row className='align-items-stretch'>

            { NewsList.map((news, key) =>{
                return <News 
                            key={key} 
                            title={news.title}
                            date={news.date}
                            text={news.text}
                            imagePath={news.imagePath}
                            alt={news.alt}
                            />
            })}
            </Row>
        </Section>
    )
}

export default SectionNewsSubpage
