import React, { useState } from 'react'
import { navbarMenu } from '../../constant/constant'
import { Link } from 'react-router-dom'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'

const MobileNav = () => {
    const [showNav, setShowNav] = useState(false);
    function subNavOpner() {
        setShowNav(!showNav)
    }
    // function subNavCloser() {
    //     setShowNav(false)
    // }
    return (
        <div className='d-flex flex-column gap-2'>
            {navbarMenu.map((ele) => {
                if (!ele.subnav) {
                    return <Link data-bs-dismiss="offcanvas" aria-label="Close" className='text-dark' style={{ fontWeight: 500 }} to={ele.navigate} key={ele.id}>{ele.name}</Link>
                } else {
                    return <>
                        <div className="d-flex">
                            <a onClick={subNavOpner}  style={{ fontWeight: 500 }} className='text-dark' href="#">Industries</a>
                            {!showNav ? <MdOutlineArrowDropDown size={20} color={"#213555"} /> : <MdOutlineArrowDropUp size={20} color={"#213555"} />}
                        </div>
                        {showNav && <div className=" rounded ms-2">
                            <ul style={{ listStyle: "none" }}>
                                {ele.subnav.map((items) => <li key={items.id}><Link data-bs-dismiss="offcanvas" aria-label="Close" className='text-secondary fs-12' tyle={{ fontWeight: 500 }} to={items.navigate}>{items.name}</Link></li>)}
                            </ul>
                        </div>}
                    </>
                }
            })}
        </div>
    )
}

export default MobileNav