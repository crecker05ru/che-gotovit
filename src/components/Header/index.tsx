import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='header'>
      <div className="header__content">
        <div className="header__logo"><Link to='/'> Che Gotovim</Link></div>
        <div className="header__navigation">
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item"><Link to='/'>Menu</Link></li>
              <li className="navigation__item"><Link to='food'>Food</Link></li>
              <li className="navigation__item"><Link to='where'>Where</Link></li>
              <li className="navigation__item"><Link to='service'>Service</Link></li>
              <li className="navigation__item"><Link to='job'>Job</Link></li>
              <li className="navigation__item"><Link to='contacts'>Contacts</Link></li>
              <li className="navigation__item"><Link to='about'>About Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
