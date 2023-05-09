import React from 'react'
import "./Features.css"
import { Feature } from '../../components'

const featuresData = [
  {
    id:1,
    title: "Improve end entrusts instantly",
    text: "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business."
  },
  {
    id:2,
    title: "A world of endless possibility",
    text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures."
  },
  {
    id:3,
    title: "AI just got better with iniGPT-3",
    text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
  },
  {
    id:4,
    title: "Live free and Live for the Now",
    text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
  }
]

const Features = () => {
  return (
    <div className="gpt__features section__padding" id="features">
      <div className="gpt__features-heading">
        <h1 className="gradient__text">
          The Future Is Now And You Just Need To Realize It. Step Into The Future Now And Make It Happen
        </h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className="gpt__features-container">
        {featuresData.map((item, index) => (
         <Feature
          key={index.id}
          title={item.title}
          text={item.text}
         />
        ))}
      </div>
    </div>
  )
}

export default Features;
