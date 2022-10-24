import React, { useRef } from 'react'
import './Home.css'
import './media-home.css'
import SvgLinkedin from '../../assets/btn-linkedin.svg'
import SvgGit from '../../assets/btn-git.svg'
import ImgPainels from '../../assets/painels.png'
import CircleBg from '../../components/circles'

export default () => {
  return (
    <>
      <CircleBg />
      <section className="section--main" id="Main">
        <div className="containner--main">
          <div className="content--text-main">
            <div className="text--main">
              <h1 className="title--main">
                Olá, eu sou{' '}
                <span>
                  {'{'}Alves{'}'}
                </span>
                .<br />
                Um desenvolvedor
                <br />
                Front-end
              </h1>
            </div>
            <div className="buttons--main">
              <div className="buttons--main-linkedin">
                <a
                  href="https://www.linkedin.com/in/alves-dev-06bb08188/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                <img src={SvgLinkedin} alt="" />
              </div>
              <div className="buttons--main-git">
                <a
                  href="https://github.com/alvesxdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <img src={SvgGit} alt="" />
              </div>
            </div>
          </div>
          <div className="img--main">
            <img src={ImgPainels} alt="Painel com HTML dentro" />
          </div>
        </div>
      </section>
    </>
  )
}
