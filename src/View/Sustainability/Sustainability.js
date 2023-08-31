import React from 'react'
import Heading from '../../Components/Heading/Heading'
import { SustainabilityFeed } from '../../constant/constant'
import Feed from '../../Components/Feed/Feed'

const Sustainability = () => {
    return (
        <div className='sustainability' > 
            <div className='banner d-flex justify-content-cente align-items-center' style={{ background: "url(../img/sustainabilitybanner.jpg)", height: "60vh", backgroundSize: "cover", backgroundPositionY: -280, backgroundRepeat: 'no-repeat' }} >
                <div className="container">
                    <div className="row items-center">
                        <div className="col-12 col-lg-6 fw-bold p-4 mt-md-5">
                            <Heading lineHeight={1} type='h1' title='Sustainability' />
                            <div className="mt-md-5 mt-3 description">
                                <Heading lineHeight={1.8} type='h6' title='Environmental stewardship is a priority for NTWIST. We help our customers to minimize their Carbon impact on the planet.' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container my-5">
                {SustainabilityFeed.map((ele) => <Feed key={ele.id} {...ele} />)}
            </div>
        </div>
    )
}

export default Sustainability