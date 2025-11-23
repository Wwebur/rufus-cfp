import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ContactForm } from '../forms'
import VideoBG from '../VideoBG'

const ContactPageTemplate = ({ title, subtitle, phone, vanity_phone, meta_title, meta_description, video }) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
        <body className='contact' />
      </Helmet>
      
      <section className='hero hero-small is-primary is-bold is-medium'>
        <div className='hero-body'>
          <h2 className='title has-text-centered has-text-weight-bold is-size-1'>
            {title}
          </h2>
        </div>

        <VideoBG video={video} />

      </section>

      <section className='section'>
        <div className='container'>

          <div className='columns is-8 is-variable'>

            <div className='column'>

              <article class="message is-medium">
                <div class="message-body">
                  {subtitle} <a href={'tel:' + phone} title='Call Critical Friend Partnership'>{vanity_phone}</a>
                </div>
              </article>
            </div>

            <div className='column'>
              <ContactForm />
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  phone: PropTypes.string,
  vanity_phone: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  video: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        type: PropTypes.string,
      }),
    ),
    PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    }),
  ]),
}

export default ContactPageTemplate
