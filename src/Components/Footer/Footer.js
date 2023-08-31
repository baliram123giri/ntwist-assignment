import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import Heading from '../Heading/Heading'
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"
const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <Link to={"/"}>  <img src="./img/ntwistlight.png" width={150} alt="" /></Link>
            </div>
            <ul>
                <li>
                    <Link to={"/"} >Home</Link>
                </li>
                <li>
                    <Link to={"/"} >About Us</Link>
                </li>
                <li>
                    <Link to={"/"} >Contact Us</Link>
                </li>
                <li>
                    <Link to={"/"} >Privacy Policy</Link>
                </li>
                <li>
                    <Link to={"/"} >Sitemap</Link>
                </li>
            </ul>
            <div className="my-3">
                <Heading fontWeight={500} color='#6f7f92' fontSize={15} title='9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada' />
            </div>
            <div className="social">
                <button>
                    <AiOutlineTwitter size={20} />
                </button>
                <button>
                    <AiFillLinkedin size={20} />
                </button>
            </div>
            <div className="my-3">
                <Heading fontWeight={500} color='#6f7f92' fontSize={15} title='© 2022. Ntwist Inc.' />
            </div>
        </footer>
    )
}

export default Footer