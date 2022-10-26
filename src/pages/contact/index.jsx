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
      if (window.scrollY > 2400) {
        setTitleContact(true)
      } else if (window.scrollY < 2000) {
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
      <section className="section--contact" id="Contact">
        <div className="content--contact"></div>
      </section>
    </>
  )
}

export default Contact
