//import { Modal, Button } from 'bootstrap'
import React from 'react'
import { Modal, Button, Row } from 'react-bootstrap'

import buildingImage from '../img/Building.jpg'

function ServiceModal(props) {

    return (
    //     <div className="modal fade services-modal" tabindex="-1" role="dialog" aria-hidden="true">
    //         <div className="modal-dialog modal-dialog-centered justify-content-center " role="document">
    //             <div className="modal-content border-0 mx-3">
    //                 <div className="modal-body p-0">
    //                     <div className="card text-center">
    //                         <div className="card-header pb-0 bg-white border-0">
    //                             <div className="row">
    //                                 <div className="col ml-auto">
    //                                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //                                         <span aria-hidden="true">&times;</span>
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                             <div className="services-modal-icon">
    //                                 <img src={props.imagePath} />
    //                             </div>
    //                             <h3>{props.title}</h3>
    //                         </div>
    //                         <div className="card-body px-sm-5 mb-5">
    //                             {/*props.children*/}
    //                             <div className="row justify-content-center mt-4 px-sm-5 ">
    //                                 <div className="col"><button type="submit" className="button-small" data-dismiss="modal"><span className="plan">Zamknij</span></button></div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

        

        <Modal
            {...props}
            size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='text-center'
        >
            <Modal.Body>
                <img className='img-size img-fluid' src={props.imagePath} alt='Widok frontu przychodni' />
                <h3>{props.title}</h3>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <button className='button-small'>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ServiceModal
