import React, { useState, useEffect } from 'react'

import './Header.css'
import ImgBrand from '../../assets/Brand.png'
import MenuBurguer from '../../assets/menuburguer/menu-burguer.svg'
import MenuClose from '../../assets/menuburguer/menu-close.svg'

const Header = () => {
  const [blackHeader, setBlackHeader] = useState(true)
  const [menu, setMenu] = useState(false)

  const ToogleMode = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <header className={blackHeader ? 'black' : ''}>
      <div className="content--header">
        <div className="img--header">
          <img src={ImgBrand} alt="Logo do site" />
        </div>

        <div className={menu ? 'IconDisable' : 'icon'} onClick={ToogleMode}>
          <img src={MenuBurguer} alt="" />
        </div>

        <div className={menu ? 'IconActive' : 'iconClose'} onClick={ToogleMode}>
          <img src={MenuClose} alt="" />
        </div>

        <nav className={menu ? 'on' : ''}>
          <ul>
            <li>
              <a href="#Main">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
