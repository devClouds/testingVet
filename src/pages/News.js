import React from 'react'

import MainNews from '../components/MainNews'
import Footer from '../components/Footer'
import HeaderSubpage from '../components/HeaderSubpage'

function News() {
    return (
        <>
            <HeaderSubpage title='Aktualności' />
            <MainNews />
            <Footer />
        </>
    )
}

export default News
