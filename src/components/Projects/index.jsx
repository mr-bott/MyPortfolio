

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './projects.css';

const Projects = () => {
    const fullstackprojects = [
        {
            name: "Hr Connect",
            image: "/assets/fullstack/HrConnect.png",
            link: "https://hr-connect-full-website.vercel.app"
        },
        {
            name: "Hr Connect",
            image: "/assets/fullstack/HrConnect.png",
            link: "https://hr-connect-full-website.vercel.app"
        },
        {
            name: "Hr Connect",
            image: "/assets/fullstack/HrConnect.png",
            link: "https://hr-connect-full-website.vercel.app"
        },
        {
            name: "Hr Connect",
            image: "/assets/fullstack/HrConnect.png",
            link: "https://hr-connect-full-website.vercel.app"
        },

    ];
    const froentendprojects = [
        {
            name: "NxtTrendz",
            image: "/assets/froentend/NxtTrendz.png",
            link: "https://murlinxtrendz.ccbp.tech/"
        },
        {
            name: "My CCBP Time Line",
            image: "/assets/froentend/TimeLine.png",
            link: "https://murliccbptmline.ccbp.tech/"
        },
        {
            name: "FindJobs",
            image: "/assets/froentend/FindJobs.png",
            link: "https://muraijobyapp.ccbp.tech/"
        },
        {
            name: "Password Manager",
            image: "/assets/froentend/Password.png",
            link: "https://pamana.ccbp.tech/"
        },
        {
            name: "Stock Marcket",
            image: "/assets/froentend/StockMarcket.png",
            link: "https://stock-marcket-conversly-ai.vercel.app/"
        },
        {
            name: "3X3 Matrix ",
            image: "/assets/froentend/3X3Matrix.png",
            link: "https://3x3-matrix-conversly.vercel.app/"
        },
        {
            name: "TextAnalysis",
            image: "/assets/froentend/TextAnlysis.png",
            link: "https://text-experiment.vercel.app/"
        },

    ]

    const basicprojects = [
        {
            name: "Co2 Emission Calc",
            image: "/assets/Basic/Eco.png",
            link: "https://ecoscore.ccbp.tech/"
        },
        {
            name: "Responsive app",
            image: "/assets/Basic/Resmk.png",
            link: "https://resmk.ccbp.tech/"
        },
        {
            name: "Todo App",
            image: "/assets/Basic/Todoapp.png",
            link: "https://mytdo.ccbp.tech/"
        },
        {
            name: "Cloud Words",
            image: "/assets/Basic/CloudWord.png",
            link: "https://clouf.ccbp.tech/"
        },
        {
            name: "Wiki Search",
            image: "/assets/Basic/Wikisearch.png",
            link: "https://wikili.ccbp.tech/"
        }, {
            name: "My first website",
            image: "/assets/Basic/Ktmm.png",
            link: "https://ktmm.ccbp.tech/"
        },

    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dotsClass: "slick-dots slick-thumb",
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        appendDots: (dots) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ul style={{ margin: "0px" }}>{dots.slice(0, 3)}</ul>
            </div>
        ),
        prevArrow: <button className="slick-prev">{"<"}</button>,
        nextArrow: <button className="slick-next">{">"}</button>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="projects section" id="projects">
            <h2 className="section_title">My Projects</h2>
            <span className="section_subtitle">What I have done</span>
            <div className="container">

                <h2 className="project_title_main">HTML,CSS & Js</h2>
                <Slider {...settings}>

                    {basicprojects.map((project, index) => (
                        <div key={index} className="slider_container">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">

                                <img src={project.image} alt={project.name} className='project_image' />
                                <h3 className='project_title'>{project.name}</h3>

                            </a>
                        </div>
                    ))}
                </Slider>

                <h2 className="project_title_main">Froentend Projects</h2>
                <Slider {...settings}>

                    {froentendprojects.map((project, index) => (
                        <div key={index} style={{ padding: '10px' }} className="slider_container">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.name} className='project_image' />
                                <h3 className='project_title'>{project.name}</h3>
                            </a>
                        </div>
                    ))}
                </Slider>

                <h2 className="project_title_main">Full Stack Projects</h2>
                <Slider {...settings}>

                    {fullstackprojects.map((project, index) => (
                        <div key={index} style={{ padding: '10px' }} className="slider_container">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.name} className='project_image' />
                                <h3 className='project_title'>{project.name}</h3>
                            </a>
                        </div>
                    ))}
                </Slider>


            </div>
        </section>
    );
};

export default Projects;