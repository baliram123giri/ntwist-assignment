import React from "react";
import Heading from "../../Components/Heading/Heading";
import { MdKeyboardArrowRight } from "react-icons/md";

const BlogCard = ({ img, date, name, title, description }) => {
    return (
        <div className="col-12 col-lg-4 ">
            <div className="bg-white shadow-sm ps-0 pt-0 pe-4">
                <div className="d-flex  justify-content-between align-items-end">
                    <div className="imag">
                        <img
                            src={img}
                            alt=""
                            style={{ maxWidth: "100%" }}
                            className="rounded-3"
                        />
                    </div>
                    <div className="date d-flex items-center flex-column justify-content-center">
                        <Heading lineHeight={1} fontSize={25} title={date?.date} />
                        <Heading lineHeight={1} fontSize={12} title={date?.month} />
                    </div>
                </div>
                <div className="ps-4">
                    <div className="d-flex my-3  gap-2 items-centre">
                        <Heading
                            lineHeight={1}
                            color="#102C57"
                            fontWeight={500}
                            fontSize={14}
                            title={name}
                        />
                        <Heading
                            lineHeight={1.6}
                            color="#102C57"
                            fontWeight={500}
                            fontSize={10}
                            title="|"
                        />
                        <Heading
                            lineHeight={1}
                            color="#102C57"
                            fontWeight={500}
                            fontSize={13}
                            title="BLOGS"
                        />
                    </div>
                    <div className="my-2 pe-md-5">
                        <Heading
                            lineHeight={1.3}
                            color="#102C57"
                            fontWeight={400}
                            fontSize={28}
                            title={title}
                        />
                        {description?.map((ele, i) => <p
                            key={i}
                            style={{
                                textAlign: "justify",
                                fontWeight: 400,
                                lineHeight: 1.5,
                            }}
                            className="fs-6 my-3"
                        >
                            {ele}
                        </p>)}

                        <div className="d-flex items-center cursor-pointer">
                            <Heading
                                lineHeight={1.3}
                                color="#102C57"
                                fontWeight={500}
                                fontSize={15}
                                title="Read More"
                            />
                            <div className="mb-2">
                                <MdKeyboardArrowRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
