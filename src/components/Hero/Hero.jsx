import React from "react";
import "./style.scss";

import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import TypeIn from "../Animations/TypeIn";
import AlternatingText from "../Animations/AlternatingText";

import Button from "./Button";
import ProfileImage from "./ProfileImage";

const Hero = () => {
    return (
        <section id="hero">
            <div className="row container">
                <div className="col hero-left">
                    <div className="hero-header">
                        <TypeIn tag="h1" text="Gregory Azarya Solo" />
                        <div className="job-wrapper">
                            <AlternatingText tag="p" texts={["A developer.", "A designer.", "A robotics engineer.", "A freelancer."]} />
                        </div>
                    </div>
                    <div className="button-container">
                        <Button text="Read On" targetId="next" />
                    </div>
                    <div className="find-me">
                        <TypeIn tag="h4" text="Find me on:" />
                        <div className="row find-me-content">
                            <div className="col wa">
                                <a href="https://wa.me/+6287808296796">
                                    <FaWhatsapp color="#ffcc00" />
                                </a>
                            </div>
                            <div className="col github">
                                <a href="https://github.com/Greg-Solo/">
                                    <FaGithub color="#ffcc00" />
                                </a>
                            </div>
                            <div className="col linkedin">
                                <a href="https://www.linkedin.com/in/gregory-solo-1b584b221">
                                    <FaLinkedin color="#ffcc00" />
                                </a>
                            </div>
                            <div className="col mail">
                                <a href="mailto:gregorysolo7@gmail.com">
                                    <FaEnvelope color="#ffcc00" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col hero-right">
                    <div className="hero-img">
                        <ProfileImage />
                    </div>
                    <div className="hero-desc">
                        <TypeIn
                            tag="p"
                            text={
                                <>
                                    A visionary engineering student majoring in Robotics and Artificial Intelligence Engineering.
                                    <br /> <br />
                                    Open for IT related projects, such as website development, computer networks, Internet of Things, robotics, etc.
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
