import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const CustomerGroups = ({ customergroups }) => (
  <div className='columns is-8 is-multiline has-text-centered is-tablet'>
    {customergroups.map((customergroup, i) => (
      <div key={'customergroup-' + i} className='column'>
        <Link to={ '/' + customergroup.link} className='has-text-primary'>
          <img width='100' alt='' src={customergroup.image} />
          <p className='mb-3 has-text-weight-semibold'>
            {customergroup.groupname}
          </p>
        </Link>
      </div>
    ))}
  </div>
)

CustomerGroups.propTypes = {
  customergroups: PropTypes.arrayOf(
    PropTypes.shape({
      groupname: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
}

export default CustomerGroups
