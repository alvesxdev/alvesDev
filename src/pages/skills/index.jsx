import React from 'react'
import './Skills.css'
import CircleBg from '../../components/circles'
import Techs from '../../assets/data/cardtech'

const Skills = () => {
  return (
    <>
      <CircleBg />
      <section className="section--skills" id="Skills">
        <div className="content--skills">
          <h1 className="title--skills">Skills</h1>
          <div className="content--cards-skills">
            {Techs.map(({ name, src }) => {
              return (
                <div className="card--skills" key={name}>
                  <div className="img--card-skills">
                    <img src={src} alt="Icone HTML" />
                  </div>
                  <p>{name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
