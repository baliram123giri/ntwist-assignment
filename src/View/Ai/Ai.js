import React from "react";
import Heading from "../../Components/Heading/Heading";
import { aiFeed } from "../../constant/constant";
import Feed from "../../Components/Feed/Feed";
import Button from "../../Components/Button/Button";

const Ai = () => {
    return (
        <div className="ai">
            <div
            className="banner"
                style={{
                    background: "url(../img/Ai-platform2.jpg)",
                    height: "40vh",
                    backgroundSize: "cover",
                    backgroundPositionY: -220,
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="d-flex position-relative justify-content-cente align-items-center h-100">
                    <div className="container">
                        <div className="row items-center">
                            <div className="col-12 col-lg-6 fw-bold p-4 mt-md-5">
                                <Heading lineHeight={1} type="h1" title="AI SOFTWARE" />
                                <div className="mt-4">
                                    <Button type="warning" title="Request Demo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <p
                    style={{ textAlign: "justify", fontWeight: 400, lineHeight: 1.5 }}
                    className="fs-6 my-3"
                >
                    NTWIST develops AI solutions to improve industrial processes. A team
                    of process, control and chemical engineers work with data scientists
                    and software engineers side-by-side, tailoring AI and machine learning
                    technologies to solve industrial problems.
                </p>
                <p
                    style={{ textAlign: "justify", fontWeight: 400, lineHeight: 1.5 }}
                    className="fs-6 my-3"
                >
                    Process engineers and control room operators are the key users of our
                    platform.
                </p>
                <p
                    style={{ textAlign: "justify", fontWeight: 400, lineHeight: 1.5 }}
                    className="fs-6 my-3"
                >
                    NTWIST product suite consists of nSensors, nAnalyser, nOptimum,
                    nDatum, and nEnviron. Please find more details of these products
                    below.
                </p>
                {aiFeed.map((ele) => (
                    <Feed key={ele.id} {...ele} />
                ))}
            </div>
        </div>
    );
};

export default Ai;
