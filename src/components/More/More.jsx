import React from "react";
import "./style.scss";

import TypeIn from "../Animations/TypeIn";
// import AlternatingText from "../Animations/AlternatingText";

// import Button from "./Button";
// import ProfileImage from "./ProfileImage";

const Hero = () => {
    return (
        <section id="next">
            <div className="container">
                <div className="row more-header">
                    <TypeIn tag="h1" text="Experience" />
                </div>
                <div className="row more-content">
                    <div className="col more-content-left">
                        <TypeIn
                            tag="h2"
                            text={
                                <>
                                    Lead Programmer of Quatron-X Team
                                    <br />
                                    AkasasuraKRTI
                                </>
                            }
                        />
                        <TypeIn tag="p" text="Part of Quatron-X team that participated in KRTI Contest, VTOL Division. Developed an autonomous drone for various missions." />
                        <TypeIn
                            tag="h2"
                            text={
                                <>
                                    Head of Publication Media Division
                                    <br />
                                    HIMATERA
                                </>
                            }
                        />
                        <TypeIn tag="p" text="Coordinated a team that handled mediums of publication such as websites, podcasts, Instagram reels, etc." />
                    </div>
                    <div className="col more-content-right">
                        <TypeIn
                            tag="h2"
                            text={
                                <>
                                    Lead Programmer of Nagapasa Team
                                    <br />
                                    KRI 2023
                                </>
                            }
                        />
                        <TypeIn tag="p" text="Part of Nagapasa Team that participated in KRBAI Contest. Contributed in building the software of the first AUV, Nagapasa 402." />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
