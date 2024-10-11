import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
              
                <h1 className="footer_title">
                    Murali Krishna
                </h1>
              
                <ul className="footer_list">
                    <li className="
            ">
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li className="
            ">
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>

                    <li className="
            ">
                        <a href="#about" className="footer_link">Projects</a>
                    </li>
                </ul>
                <div className="footer_social">
                    <a href="https://github.com/mr-bott" className="footer_social_link" target="_blank">

                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/murali-krishna-abbugondi/" className="footer_social_link" target="_blank">

                    <i class='bx bxl-linkedin-square'></i>
                    </a>
                    <a href="https://www.instagram.com/kr1shna.7_/" className="footer_social_link" target="_blank">

                    <i className="bx bxl-instagram"></i>
                    </a>
                </div>
                <span className="footer_copy">
                    &#169; Murali Krishna all rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer
