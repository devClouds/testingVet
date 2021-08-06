import React, { useState } from 'react'
import ServiceModal from './ServiceModal'
import { Col } from 'react-bootstrap'


function Service(props) {

    // function showModal(e){
    //     e.preventDefault();

    //     var test = e.target;
    //     var modal = test.find('services-modal')
    //     alert(modal);


    // }

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
        alert(showModal);
    }

    return (
        <Col sm="6" lg="3" className='mb-4'>
            <div className='services-box' onClick={openModal}>
                <div className="services-box-icon">
                    <img src={props.imagePath} />
                </div>
                <div className="services-box-content">
                    <h4><strong>{props.title}</strong></h4>
                    <ServiceModal title={props.title} imagePath={props.imagePath}/>
                </div>
            </div>
        </Col>
    )
}

export default Service
