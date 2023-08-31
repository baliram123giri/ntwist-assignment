import React from 'react'
import Heading from '../../Components/Heading/Heading'
import { oilFeed } from '../../constant/constant'
import Feed from '../../Components/Feed/Feed'
import Button from '../../Components/Button/Button'

const Oil = () => {
    return (
        <div className='oil'>
            <div className='banner' style={{ background: "url(../img/oil-and-gas.jpg)", height: "65vh", backgroundSize: "cover", backgroundPositionY: -200, backgroundRepeat: 'no-repeat' }} >
                <div className="image-overlay d-flex position-relative justify-content-cente align-items-center">
                    <div className="container">
                        <div className="row items-center">
                            <div className="col-12 col-lg-6 fw-bold p-4 mt-md-5">
                                <Heading lineHeight={1} type='h1' title='Oil & Gas' />
                                <div className="mt-md-5 mt-3">
                                    <Heading lineHeight={1.8} fontWeight={500} fontSize={15} title='Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. NTWIST helps O&G customers analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.' />
                                </div>
                                <div className="mt-md-5 mt-2">
                                    <Button type='warning' title='Request Demo' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                {oilFeed.map((ele) => <Feed key={ele.id} {...ele} />)}
            </div>
        </div>
    )
}

export default Oil