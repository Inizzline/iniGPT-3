import React from 'react'
import possibilityImage from "../../assets/possibility.png"
import "./Possibility.css"

const Possibililty = () => {
  return (
    <div className="gpt__possibility section__padding" id="possibility">
      <div className="gpt__possibility-image">
        <img src={possibilityImage} alt="Girl on VR"/>
      </div>
      <div className="gpt__possibility-content">
        <h4>
          Request Early Access To Get Started
        </h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          The release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h4>
          Request Early Access To Get Started
        </h4>
      </div>
    </div>
  )
}

export default Possibililty;
