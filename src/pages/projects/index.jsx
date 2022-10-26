import React, { useState, useEffect, useRef } from 'react'
import './Projects.css'
import './media-projects.css'
import cards from '../../assets/data/slidesprojects'

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
      <section className="section--projects" id="Projects">
        <h1 className="title--projects">Projects</h1>
        <div className="carousel--projects" ref={sla}>
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
