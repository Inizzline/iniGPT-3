import React from "react";
import { Blogs, Features, Footer, Header, Possibility, WhatGPT } from "./container";
import { Navbar, Cta, BrandsSlider} from "./components"
import "./App.css"


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <BrandsSlider/>
      <WhatGPT/>
      <Possibility/>
      <Features/>
      <Cta/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App
