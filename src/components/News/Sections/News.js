import React from 'react'
import { Row } from 'react-bootstrap'
import Section from '../../Section'

import New from './New/New';
import NewsList from '../../../json/News.json'

function News() {
    return (
        <Section id='aktualnosci' name='subpage'>
            <Row className='align-items-stretch'>

            { NewsList.map((news, key) =>{
                return <New 
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

export default News
