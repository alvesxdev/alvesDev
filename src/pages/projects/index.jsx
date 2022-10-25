import React, { useState, useEffect, useRef } from 'react'
import './Projects.css'
import cards from '../../assets/data/slidesprojects'
import CircleBg from '../../components/circles'

const Projects = () => {
  const [index, setIndex] = useState(0)

  const mod = (n, m) => {
    const result = n % m

    return result >= 0 ? result : result + m
  }

  const sla = useRef()

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length)
    }, 5000)
  }, [index])

  return (
    <>
      <CircleBg />
      <section className="section--projects" id="Projects">
        <div className="carousel--projects" ref={sla}>
          <h1 className="title--projects">Projects</h1>
          <div className="content--cards--projects">
            {cards.map((item, i) => {
              const indexLeft = mod(index - 1, cards.length)
              const indexRigth = mod(index + 1, cards.length)

              let className = ''
              if (i === index) {
                className = 'card--projects card--projects-active'
              } else if (i === indexRigth) {
                className = 'card--projects card--project-right'
              } else if (i === indexLeft) {
                className = 'card--projects card--project-left'
              } else {
                className = 'card--projects'
              }

              return (
                <img
                  key={item.id}
                  src={item.image}
                  alt="Projects"
                  className={className}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
