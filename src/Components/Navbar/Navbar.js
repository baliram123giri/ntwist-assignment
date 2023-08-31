import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { navbarMenu } from "../../constant/constant";
import MobileNav from "./MobileNav";
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showNav, setShowNav] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function subNavOpner() {
        setShowNav(true)
    }
    function subNavCloser() {
        setShowNav(false)
    }
    return (
        <header onMouseLeave={subNavCloser} className={`scroll-${!scrolled ? "top" : "bottom"} py-2`}>
            <div class="offcanvas offcanvas-top" style={{ height: "95vh" }} tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header justify-content-end">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <MobileNav />
                </div>
            </div>
            <nav>
                <div className="row align-items-center">
                    <div className="col-4">
                        <div className="logo">
                            <Link to={"/"}><img
                                src={`./img/${!scrolled ? "ntwistlight" : "ntwist-logo-dark"
                                    }.png`}
                                alt=""
                                width={150}
                            /></Link>
                        </div>
                    </div>
                    <div className="col-8 d-flex justify-content-end">
                        <div className="bar" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                            <FiMenu color={!scrolled ? "#fff" : "#213555"} size={30} cursor={"pointer"} />
                        </div>
                        <ul >
                            {navbarMenu.map((ele) => {
                                if (!ele.subnav) {
                                    return <li key={ele.id}>
                                        <NavLink to={ele.navigate} >{ele.name}</NavLink>
                                    </li>
                                } else {
                                    return <li key={ele.id} onMouseEnter={subNavOpner} className="postion-relative">
                                        <a href="#">Industries</a>
                                        <MdOutlineArrowDropDown size={20} color={!scrolled ? "#fff" : "#213555"} />
                                        {showNav && <div className="sub-nav position-absolute shadow rounded mt-3">
                                            <ul>
                                                {ele.subnav.map((items) => <li key={items.id}><Link to={items.navigate}>{items.name}</Link></li>)}
                                            </ul>
                                        </div>}
                                    </li>
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
