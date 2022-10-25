import './Contact.css'
import './media-contact.css'
import React, { useState, useEffect } from 'react'
import PainelContact from '../../assets/painel-contact.png'
import CircleBg from '../../components/circles'
import cardContact from '../../assets/data/iconscontact'

const Contact = () => {
  const [titleContact, setTitleContact] = useState(true)

  const ToogleMode = () => {
    setTitleContact(!titleContact)
  }

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 3000) {
        setTitleContact(true)
      } else if (window.scrollY < 2500) {
        setTitleContact(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      <CircleBg />
      <section className="section--contact" id="Contact">
        <div className="content--contact">
          <div
            className={
              titleContact ? 'container--contact-active' : 'container--contact'
            }
          >
            <h3>
              &lt;<span>h2</span>&gt;Contact&lt;/<span>h2</span>&gt;
            </h3>
            <h4>My Social Stuff</h4>
            <ul>
              {cardContact.map(({ src, link, id }) => {
                return (
                  <li key={id}>
                    <a href={link} target="_blank" rel="noreferrer">
                      <img src={src} alt="" />
                    </a>
                  </li>
                )
              })}
            </ul>
            <img src={PainelContact} alt="Painel de contato" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
