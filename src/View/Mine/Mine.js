import React from 'react'
import Heading from '../../Components/Heading/Heading'
import { mineFeed } from '../../constant/constant'
import Feed from '../../Components/Feed/Feed'
import Button from '../../Components/Button/Button'

const Mine = () => {
    return (
        <div className='mine'>
            <div className='banner' style={{ background: "url(../img/iStock-1188996771-scaled-e1674842758764.jpg)", height: "70vh", backgroundSize: "cover", backgroundPositionY: -150, backgroundRepeat: 'no-repeat' }} >
                <div className="image-overlay d-flex position-relative justify-content-cente align-items-center">
                    <div className="container">
                        <div className="row items-center">
                            <div className="col-12 col-lg-6 fw-bold p-4 mt-md-5">
                                <Heading lineHeight={1} type='h1' title='Mine-To-Mill-To-Mine Optimization' />
                                <div className="mt-md-5 mt-3">
                                    <Heading lineHeight={1.8} fontWeight={500} fontSize={16} title='NTWIST offers a new product that unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. ' />
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
                {mineFeed.map((ele) => <Feed key={ele.id} {...ele} />)}
            </div>
        </div>
    )
}

export default Mine