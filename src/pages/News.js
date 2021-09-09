import React from 'react'

import Footer from '../components/Footer'
import HeaderSubpage from '../components/HeaderSubpage'
import Main from '../components/News/Main'

function News() {
    return (
        <>
            <HeaderSubpage title='Aktualności' />
            <Main/>
            <Footer />
        </>
    )
}

export default News
