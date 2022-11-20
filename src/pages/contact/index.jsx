import './Contact.css'
import './media-contact.css'
import React, { useState, useEffect } from 'react'
import PainelContact from '../../assets/painel-contact.png'

import SvgBehance from '../../assets/svgs-contact/behance.svg'
import SvgLinke from '../../assets/svgs-contact/linkedinsvg.svg'
import SvgGitHub from '../../assets/svgs-contact/gitsvg.svg'
import SvgEmail from '../../assets/svgs-contact/svgemail.svg'

const inputsContact = [
  {
    id: 1,
    type: 'text',
    place: 'Name:',
    name: 'name',
  },
  {
    id: 2,
    type: 'email',
    place: 'E-mail:',
    name: 'email',
  },
  {
    id: 3,
    type: 'text',
    place: 'Company:',
    name: 'empresa',
  },
  {
    id: 4,
    type: 'text',
    place: 'Mensage:',
    name: 'mesage',
  },
]

const svgIconsContact = [
  {
    id: 1,
    src: SvgBehance,
    alt: 'Link Behance',
  },
  {
    id: 2,
    src: SvgLinke,
    alt: 'Link Linkedin',
  },
  {
    id: 3,
    src: SvgGitHub,
    alt: 'Link GitHub',
  },
  {
    id: 4,
    src: SvgEmail,
    alt: 'E-mail',
  },
]

const Contact = () => {
  return (
    <>
      <section className="section--contact" id="Contact">
        <div className="content--contact">
          <div className="container--contact">
            <div className="content--contact-form">
              <form className="inputs--fields">
                {inputsContact.map(({ id, type, place, name }) => {
                  return (
                    <input
                      type={type}
                      placeholder={place}
                      name={name}
                      key={id}
                      required
                    />
                  )
                })}
                <button type="submit">Send</button>
              </form>
              <div className="icons--contact">
                <div className="icons--contact-svg">
                  {svgIconsContact.map(({ id, src, alt }) => {
                    return (
                      <div className="img-contact" key={id}>
                        <img src={src} alt={alt} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
