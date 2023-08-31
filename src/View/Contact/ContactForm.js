import React from "react";
import { formFields } from "../../constant/constant";
import Heading from "../../Components/Heading/Heading";
import { MdKeyboardArrowRight } from "react-icons/md";

const ContactForm = () => {
    return (
        <form action="">
            <div className="row">
                <div
                    style={{ background: "#EEEEEE" }}
                    className="clo-12 col-lg-8  py-5"
                >
                    <div className="px-4">
                        <div className="d-flex gap-2 items-center mb-4">
                            <Heading
                                lineHeight={1}
                                fontWeight={500}
                                color="#102C57"
                                type="h1"
                                title={`Contact`}
                            />
                            <Heading
                                lineHeight={1}
                                fontWeight={200}
                                color="#102C57"
                                type="h1"
                                title={`Us`}
                            />
                        </div>
                        <div className="row">
                            {formFields.map((input, i) => {
                                if (input.type !== "textarea") {
                                    return (
                                        <div key={i} className={`col-12 my-3 col-lg-${input.col}`}>
                                            <input
                                                className="border w-100  py-2 px-3 rounded-2"
                                                placeholder={input.placeholder}
                                                type={input.type}
                                            />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={i} className={`col-12 my-3 col-lg-${input.col}`}>
                                            <textarea
                                                rows={10}
                                                className="border w-100  py-2 px-3 rounded-2"
                                                placeholder={input.placeholder}
                                                type={input.type}
                                            />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <button className="d-flex items-center border-0 bg-white py-2 px-4">
                            {" "}
                            <span>Send Message</span>
                            <MdKeyboardArrowRight size={20} />
                        </button>
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex items-center">
                    <div>
                        <div className="d-flex flex-column gap-2 px-2 border-bottom border-2 pb-4">
                            <Heading lineHeight={1}
                                fontWeight={500}
                                fontSize={25}
                                color="#102C57" title="Our Address" />
                            <div className="w-75">
                                <Heading lineHeight={1.8}
                                    fontWeight={500}
                                    color="#000"
                                    fontSize={13}
                                    title="9650 20 Ave NW, Edmonton, AB T6N 1G1, Canada." />
                                <Heading lineHeight={1.8}
                                    fontWeight={500}
                                    color="#000"
                                    fontSize={13}
                                    title="CIE, Vindhya C4 IIIT-H Campus, Gachibowli, Hyderabad 500032" />
                            </div>
                        </div>
                        <div className="d-flex flex-column mt-5 gap-2 px-2 border-bottom border-2 pb-4">
                            <Heading lineHeight={1}
                                fontWeight={500}
                                fontSize={25}
                                color="#102C57" title="Support Email" />
                            <div className="w-75">
                                <Heading lineHeight={1.8}
                                    fontWeight={500}
                                    color="#000"
                                    fontSize={13}
                                    title="info@ntwist.com" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
