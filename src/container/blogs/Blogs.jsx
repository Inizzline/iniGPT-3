import React from 'react'
import "./Blogs.css"
import { Article } from '../../components';
import { blog1, blog2, blog3, blog4, blog5 } from "./import"

const Blogs = () => {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We're blogging about it
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">
         
          <Article imgUrl={blog5} title="iniGPT-3 and Open AI is the future. Let us explore it's boundless possibilities" date="Oct 19, 2022" alt="blog5"/>
        </div>
        <div className="gpt__blog-container_groupB">
          <Article imgUrl={blog2} title="The all in ONE powerful microchip" date="Sep 5, 2022" alt="blog2"/>
          <Article imgUrl={blog3} title="Software engineering just got better and easier" date="Oct 19, 2022" alt="blog3"/>
          <Article imgUrl={blog1} title="A world of seamless and endless connectivity" date="Oct 19, 2022" alt="blog1"/>
          <Article imgUrl={blog4} title="The future of cyber-security with AI" date="Oct 19, 2022" alt="blog4"/>
        </div>
      </div>
    </div>
  )
}

export default Blogs;
