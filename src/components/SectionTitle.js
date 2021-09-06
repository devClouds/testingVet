import React from 'react'
import Fade from 'react-reveal/Fade'

function SectionTitle(props) {
    return (
        <Fade bottom>
            <h2 className="paragraph-title-green">{props.title}</h2>
        </Fade>

    )
}

export default SectionTitle
