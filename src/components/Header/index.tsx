import React from 'react'

export default function Header() {
  return (
    <header className='header'>
      <div className="header__content">
        <div className="header__logo"><a href='#'> Че готовить</a></div>
        <div className="header__navigation">
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item"><a href='#'>Menu</a></li>
              <li className="navigation__item"><a href='#'>Food</a></li>
              <li className="navigation__item"><a href='#'>Where</a></li>
              <li className="navigation__item"><a href='#'>Service</a></li>
              <li className="navigation__item"><a href='#'>Job</a></li>
              <li className="navigation__item"><a href='#'>Contacts</a></li>
              <li className="navigation__item"><a href='#'>About Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
