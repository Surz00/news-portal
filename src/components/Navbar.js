import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { client } from '../sanity'
import './Navbar.css'

export default function Navbar() {
  const [categories, setCategories] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    client.fetch(`
      *[_type == "category"] | order(title asc){
        title,
        slug
      }
    `).then(setCategories)
  }, [])

  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="navbar-logo">
          NEWS<span>PORTAL</span>
        </NavLink>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          {categories.map(cat => (
            <NavLink
              key={cat.slug.current}
              to={`/category/${cat.slug.current}`}
              onClick={() => setOpen(false)}
            >
              {cat.title}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  )
}
