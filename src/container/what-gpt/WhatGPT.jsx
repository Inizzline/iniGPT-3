import React from 'react'
import "./whatGPT.css"
// import Features from '../features/Features';
import { Feature } from '../../components'

const WhatGPT = () => {
  return (
    <div className="gpt__wgpt section__margin" id="wgpt">
      <div className="gpt__wgpt-feature">
        <Feature
          title= "What is iniGPT-3"
          text= "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."  
          />
      </div>
      <div className="gpt__wgpt-heading">
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt__wgpt-container">
        <Feature
          title= "Chatbots"
          text= "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        />
        <Feature
          title= "Knowledgebase"
          text= "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum."
        />
        <Feature
          title= "Education"
          text= "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty."
        />
      </div>
    </div>
  )
}

export default WhatGPT;
