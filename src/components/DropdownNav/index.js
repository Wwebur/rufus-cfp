import React from 'react'
import { Link } from 'gatsby'

const DropdownNav = () => (

  <div className='navbar-dropdown'>
    <Link to='/established-broker' className='navbar-item'>
      Established Insurance Brokers
    </Link>
    <Link to='/startup-broker' className='navbar-item'>
      Start Up Insurance Brokers
    </Link>
    <Link className='navbar-item' to='/appointed-representative'>
      Appointed Representative
    </Link>
    <Link className='navbar-item' to='/insurers-mga-lloyds'>
      Insurers, MGA's or Lloyds Syndicate
    </Link>
    <Link className='navbar-item' to='/suppliers'>
      Suppliers
    </Link>
    <Link className='navbar-item' to='/acquisitions'>
      Mergers & Acquisitions
    </Link>
  </div>
)

export default DropdownNav
