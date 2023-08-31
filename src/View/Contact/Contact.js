import React from 'react'
import Heading from '../../Components/Heading/Heading'
import "./contact.css"
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='banner' style={{ background: "url(../img/oil-and-gas.jpg)", height: "40vh", backgroundSize: "cover", backgroundPositionY: -300, backgroundRepeat: 'no-repeat' }} >
                <div className="image-overlay d-flex position-relative justify-content-cente align-items-center">
                    <div className="container">
                        <div className="row items-center">
                            <div className="col-12 col-lg-8  fw-bold p-4 mt-md-5">
                                <Heading lineHeight={1} type='h1' title={`Let's Discuss`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact