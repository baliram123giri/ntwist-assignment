import React from 'react'
import "./homepage.css"
import Heading from '../../Components/Heading/Heading'
import Button from '../../Components/Button/Button'
import { homeFeed } from '../../constant/constant'
import Feed from '../../Components/Feed/Feed'
import { useNavigate } from 'react-router-dom'


const Homepage = () => {
    const navigate = useNavigate()
    return (
        <div className="home">
            <div className='d-flex justify-content-cente align-items-center' style={{ background: "url(../img/home-image-bg-v6.png)", height: "100vh", backgroundSize: "cover" }} >
                <div className="container">
                    <div className="row items-center">
                        <div className="col-12 col-lg-6 fw-bold">
                            <Heading lineHeight={1} type='h1' title='Data-powered solutions' />
                            <Heading lineHeight={1} type='h1' title='for Industrial Excellence' />
                            <div className="mt-3">
                                <Button title='Read More' onClick={()=>navigate("/mine")} />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 banner">
                            <img src="./img/home-image-icons-v6.png" width={"100%"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                {homeFeed.map((ele) => <Feed onClick={() => navigate(`/${ele.navigate}`)} key={ele.id} {...ele} showbtn />)}
            </div>
        </div>

    )
}

export default Homepage