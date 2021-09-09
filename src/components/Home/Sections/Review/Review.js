import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'

function Review(props) {
    return (
        <blockquote>
            <FaQuoteRight className='cite-mark'/>
            <p>{props.children}</p>
            <cite className='cite'>- {props.author}</cite>
        </blockquote>
    )
}

export default Review
