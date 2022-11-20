import React from 'react'
import './About.css'
import PainelMe from '../../assets/painel-img-me.png'
import CircleBg from '../../components/circles'
import './media-about.css'

const About = () => {
  return (
    <>
      <CircleBg />
      <section className="section--about" id="About">
        <div className="content--section-about">
          <div className="text--section-about">
            <h1 className="tittle--about">About me</h1>
            <h2 className="sub-title--about">Manaus-AM</h2>
            <p className="description--about">
              Hello, my name is Henry Santos “Alves”, and I have been passionate
              about technology since I was 12 years old, I had my first contact
              with the “HTML” and “CSS” markup languages ​​in August 2022, then
              I started to study “ ReactJS”, since then I decided to take this
              Front-end path, and learn more about this wonderful world.
            </p>
          </div>
          <div className="img--about">
            <img src={PainelMe} alt="Painel com minha foto" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
