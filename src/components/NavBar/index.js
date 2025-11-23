import React from 'react'
import logo from '../../assets/img/logo.png'
import DropdownNav from '../DropdownNav'
import DropdownTestimonialNav from '../DropdownTestimonialNav'
import { Link } from 'gatsby'

const NavBar = ({ toggleNavbar, isActive }) => (

  <nav className='navbar is-fixed-top' aria-label='main navigation'>
    <div className='container'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <img src={logo} alt='Critical Friend Partnership' className='image is-32x32' />
          <h1 className='logo has-text-weight-bold'>Critical Friend<br />Partnership</h1>
        </Link>
        <button
          className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
          data-target='navMenu'
          onClick={toggleNavbar}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

        <div className='navbar-end'>

          <div className='navbar-item has-dropdown is-hoverable ml-4'>
            <div className='navbar-link'>
              Target Clients
            </div>
            <DropdownNav />
          </div>

          <div className='navbar-item has-dropdown is-hoverable ml-4'>
            <div className='navbar-link'>
              Testimonials
            </div>
            <DropdownTestimonialNav />
          </div>

          <Link className='navbar-item ml-4' to='/richard-pitt'>
            Why do I do this?
          </Link>

          <div className='navbar-item'>
            <div className='field is-grouped'>
              <p className='control'>
                <Link
                  className='button ml-4 is-primary is-outlined'
                  to='/contact'>
                  Clarity Call
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
