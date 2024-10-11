import React from "react"
import Info from "./Info"
import "./about.css"

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>
            <div className="about_container container grid">
                <img src="/assets/MyImage.jpg" alt="my-image" className="about_img" />
                <div className="about_data">
                    <Info />
                    <p className="about_description">

                    I'm a full-stack developer passionate about creating seamless web applications that bridge user experience and server-side functionality. With expertise in front-end and back-end technologies, I tackle challenges with innovative solutions and value collaboration in the tech community.
                    </p>
                    <a download href="/assets/Murali Krishna Abbugondi.pdf" className="button1">
                        Download CV <i class='bx bxs-report bx-flashing' ></i>
                    </a>
                </div>

            </div>
        </section>
    )
}
export default About