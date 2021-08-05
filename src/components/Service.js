import React from 'react'
import ServiceModal from './ServiceModal'

function Service(props) {
    return (
        <Col sm="6" lg="3" className='mb-4'>
            <div className='services-box'>
                <div className="services-box-icon">
                    <img src="img/services/syringe.svg" />
                </div>
                <div className="services-box-content">
                    <h4><strong>{props.title}</strong></h4>
                    <ServiceModal />
                </div>
            </div>
        </Col>
    )
}

export default Service
