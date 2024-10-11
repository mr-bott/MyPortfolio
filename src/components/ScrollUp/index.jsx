import React from 'react'
import "./scrollup.css"
const ScrollUp = () => {
  const pullUp=()=>{
    const contactSection = document.getElementById("home");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <a onClick={pullUp} className="scrollup">
        <i className="uil uil-arrow-up scrollup_icon">

        </i>
    </a>
  )
}

export default ScrollUp
