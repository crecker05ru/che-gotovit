import React from "react"
import { Link, NavLink, useMatch } from "react-router-dom"

const navigationLinks = [{
  to: '/',
  name: 'Menu'
}, {
    to: "my-recipes",
    name: 'My recipes'
  },{
     to: "my-favorites",
     name: 'My favorites'
    },{
      to: "food",
      name: 'Food'
    },{to: "here",
    name: 'Wenu'}, 
    {to: "service",name: 'Service'},
    {to: "job",name: 'Job'},
    {to: "contacts",name: 'Contacts'},
    {to: "about",name: 'About'}
  ]
export default function Header() {
  const activeStyle = {
    textDecoration: "underline",
    backgroundColor: "ffffff",
  }
  let activeClassName = "navigation-item__active";
  const isActive = useMatch('/')
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/"> Che Gotovim</Link>
        </div>
        <div className="header__navigation">
          <nav className="navigation">
            <ul className="navigation__list">
              {navigationLinks.map(link => 
                <li key={link.to} className="navigation__item">
                  <NavLink to={link.to} className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }>{link.name}</NavLink>
                </li>)}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
