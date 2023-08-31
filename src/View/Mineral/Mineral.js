import React from 'react'
import Heading from '../../Components/Heading/Heading'
import { MineralFeed } from '../../constant/constant'
import Feed from '../../Components/Feed/Feed'
import Button from '../../Components/Button/Button'

const Mineral = () => {
    return (
        <div className='mineral'>
            <div className='banner' style={{ backgroundImage: "url(../img/metalore-1024x475-1.jpg)", height: "60vh", backgroundSize: "cover", backgroundPositionY: -100, backgroundRepeat: 'no-repeat' }} >
                <div className="image-overlay d-flex position-relative justify-content-cente align-items-center">
                    <div className="container" >
                        <div className="row items-center">
                            <div className="col-12 fw-bold p-4">
                                <Heading lineHeight={1} color='text-white' type='h1' title='Mineral Processing' />
                                <div className="mt-3 mt-md-5">
                                    <Heading lineHeight={1.8} fontSize={15} title='NTWIST offers a number of solutions for mills, concentrators, and leach plants.' />
                                </div>
                                <div className="mt-2">
                                    <Heading lineHeight={1.8} fontSize={15} title='Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption' />
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
                {MineralFeed.map((ele) => <Feed key={ele.id} {...ele} />)}
            </div>
        </div>
    )
}

export default Mineral