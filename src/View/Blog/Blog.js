import React from 'react'
import Heading from '../../Components/Heading/Heading'
import BlogCard from './BlogCard'
import "./blog.css"
import { blogsFeed } from '../../constant/constant'
const Blog = () => {
    return (
        <div className='blog'>
            <div className='banner' style={{ background: "url(../img/oil-and-gas.jpg)", height: "55vh", backgroundSize: "cover", backgroundPositionY: -200, backgroundRepeat: 'no-repeat' }} >
                <div className="image-overlay d-flex position-relative justify-content-cente align-items-center">
                    <div className="container">
                        <div className="row items-center">
                            <div className="col-12 col-lg-8  fw-bold p-4 mt-md-5">
                                <Heading lineHeight={1} type='h1' title='Blog' />
                                <div className="mt-5">
                                    <Heading lineHeight={1.8} fontWeight={500} fontSize={20} title='Your guide to AI. Here you can find new meanings in the ever-evolving world of data, and see its value which can help to improve the business.' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    {blogsFeed.map((ele, i) => <BlogCard {...ele} key={i} />)}
                </div>
            </div>
        </div>
    )
}

export default Blog