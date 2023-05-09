import React from 'react'
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
import "./Header.css"

const Header = () => {
  return (
    <div className="gpt__header section__padding" id="Home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">
            Let's Build Something amazing with iniGPT-3 OpenAI
        </h1>
        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <div className="gpt__header-content__input">
          <input type="email" placeholder="Enter Your Email"/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt__header-content__people">
          <img src={people} alt="People"/>
          <p>1800+ people requested to access a visit in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt__header-image">
          <img src={ai} alt="AI"/>
        </div>
    </div>
  )
}

export default Header;
