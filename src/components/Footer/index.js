import React from 'react'
import config from '../../../config'
import { Link } from 'gatsby'

const Footer = () => {
  return (

    <footer className='footer has-background-primary has-text-primary-light'>

    
      <div className='container has-text-centered'>

        <div className='has-text-centered vh-padding'>
          <h4 className='has-text-weight-semibold is-size-4 column is-half is-offset-one-quarter'>
            <em>Critical Friend Partnership turns your ambition and potential into your reality.</em>
          </h4>
          
          <Link
            className='button mt-4 is-light'
            to='/contact'>
            Clarity Call
          </Link>

        </div>
            
        <hr className='has-background-light' style={{opacity: 0.1}} />

        <div className='content'>
          <p>
            <a href='mailto:richard.pitt@criticalfriendpartnership.co.uk' title='Email Richard Pitt'>richard.pitt@criticalfriendpartnership.co.uk</a>
            <span className='is-hidden-mobile'>&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;</span>
            <br className='is-hidden-tablet' />
            <a href='tel:+447920299727' title='Call Richard Pitt'>07920 299727</a>
          </p>
          <p>
            <Link
              className='has-text-light'
              to='/privacy'>
              Privacy Policy
            </Link>
            &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
            {config.copyright}
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
