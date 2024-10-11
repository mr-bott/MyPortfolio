import React, { useState } from 'react'
import "./services.css"
const Services = () => {
    const [ToogleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">
                what i offer
            </span>
            <div className="services_container container grid">
                <div className="services_content">
                    <div className="">
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">Web Developer</h3>
                    </div>
                    <span className="services_button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services_button_icon">
                        </i>
                    </span>
                    <div className={ToogleState === 1 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={() => toggleTab(0)}>

                            </i>
                            <h3 className="services_modal_title">
                              Web Designer
                            </h3>
                            <p className="services_modal_description">
                            I have more than 2 years of experience and can deliver high-quality of work.
                            </p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Web page development.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    I create UX element interactions
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Design and mockups of products for companies
                                    </p>
                                </li>

                                



                            </ul>
                        </div>
                    </div>



                </div>


                <div className="services_content">
                    <div className="">
                        <i className="bx bx-terminal services_icon"></i>
                        <h3 className="services_title">Backend Developer</h3>
                    </div>
                    <span className="services_button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services_button_icon">
                        </i>
                    </span>
                    <div className={ToogleState === 3 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={() => toggleTab(0)}>

                            </i>
                            <h3 className="services_modal_title">
                            Backend Developer
                            </h3>
                            <p className="services_modal_description">
                            I have more than 2 years of experience and can deliver high-quality work 
                            </p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    I develop and maintain server-side applications.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                   Create and manage APIs for seamless data communication.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Optimize database interactions and queries.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                 Implement authentication and authorization protocols.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Ensure the performance, security, and reliability of applications.
                                    </p>
                                </li>



                            </ul>
                        </div>
                    </div>



                </div>

                <div className="services_content">
                    <div className="">
                        <i className="bx bxs-data services_icon"></i>
                        <h3 className="services_title">Database Designer</h3>
                    </div>
                    <span className="services_button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services_button_icon">
                        </i>
                    </span>
                    <div className={ToogleState === 2 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={() => toggleTab(0)}>

                            </i>
                            <h3 className="services_modal_title">
                            Database Designer
                            </h3>
                            <p className="services_modal_description">
                            I have more than 2 years of experience and can deliver high-quality work 
                            </p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    I design and implement database structures.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Optimize database performance and queries
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Ensure data integrity and security.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Create and manage database documentation
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Provide data migration and integration solutions
                                    </p>
                                </li>



                            </ul>
                        </div>
                    </div>



                </div>

            </div>
        </section>
    )
}

export default Services
