import React, { useEffect } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Aos from "aos";
import "aos/dist/aos.css"
const Feed = ({ description = [], title, onClick, color = "text-danger", img, position, showbtn = false }) => {
    const setPadding = position === "left"
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, [])
    return (
        <div className={`row  my-md-6   items-center ${setPadding ? "flex-md-row-reverse" : ""}`}>
            <div data-aos="slide-up" className={`col-12 col-lg-6 ${setPadding ? "ps-4" : "pe-4"}`}>
                {title && <Heading
                    fontWeight={500}
                    color={color}
                    title={title}
                />}
                {description.map((ele, id) => <p
                    key={id}
                    style={{ textAlign: "justify", fontWeight: 400, lineHeight: 1.5 }}
                    className="fs-6 my-3"
                >
                    {ele}
                </p>)}
                {showbtn && <div className="mt-5">
                    <Button onClick={onClick} size="sm" title="Read More" type="danger" />
                </div>}
            </div>
            <div data-aos="slide-up" data-aos-delay="100" className="col-12 col-lg-6 ">
                <img src={img} style={{ maxWidth: "100%" }} alt="" />
            </div>
        </div>
    );
};

export default Feed;
