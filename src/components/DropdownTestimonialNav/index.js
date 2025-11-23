import React from 'react'
import { Link } from 'gatsby'

const DropdownTestimonialNav = () => (

  <div className='navbar-dropdown'>
    <Link to='/established-broker#testimonials' className='navbar-item'>
      Established Insurance Brokers
    </Link>
    <Link to='/startup-broker#testimonials' className='navbar-item'>
      Start Up Insurance Brokers
    </Link>
    <Link className='navbar-item' to='/appointed-representative#testimonials'>
      Appointed Representative
    </Link>
    <Link className='navbar-item' to='/insurers-mga-lloyds#testimonials'>
      Insurers, MGA's or Lloyds Syndicate
    </Link>
    <Link className='navbar-item' to='/suppliers#testimonials'>
      Suppliers
    </Link>
    <Link className='navbar-item' to='/acquisitions#testimonials'>
      Mergers & Acquisitions
    </Link>
  </div>
)

export default DropdownTestimonialNav
