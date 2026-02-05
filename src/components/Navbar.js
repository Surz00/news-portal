import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { client } from '../sanity'
import './Navbar.css'

export default function Navbar() {
  const [categories, setCategories] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    client
      .fetch(`
        *[_type == "category"]{
          _id,
          title,
          "slug": slug.current
        }
      `)
      .then(setCategories)
      .catch(console.error)
  }, [])

  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="navbar-logo">
          Taza<span>TRUTH</span>
        </NavLink>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          {categories.map(cat => (
            <NavLink
              key={cat._id}
              to={`/category/${cat.slug}`}
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
