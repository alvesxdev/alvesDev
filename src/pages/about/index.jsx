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
            <h1 className="tittle--about">Sobre mim</h1>
            <h2 className="sub-title--about">Manaus-AM</h2>
            <p className="description--about">
              Olá, eu me chamo Henry Santos “Alves”, e sou apaixonado por
              tecnologia desde os meus 12 anos de idade, tive meu primeiro
              contato com as linguagens de marcação “HTML” e “CSS” em agosto de
              2022, depois comecei a estudar “ReactJs”, desde então decidi
              trilhar nesse caminho de Front-end, e aprender mais sobre esse
              mundo maravilhoso.
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
