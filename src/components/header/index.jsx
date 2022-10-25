import React, { useState, useEffect } from 'react'
import './Header.css'
import ImgBrand from '../../assets/Brand.png'
import MenuBurguer from '../../assets/menuburguer/menu-burguer.svg'
import MenuClose from '../../assets/menuburguer/menu-close.svg'
import itemsMenu from '../../assets/data/itemsmenu'

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
            {itemsMenu.map(({ id, option, href }) => {
              return (
                <li key={id}>
                  <a href={href}>{option}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
