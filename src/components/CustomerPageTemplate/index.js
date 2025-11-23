import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import VideoBG from '../VideoBG'
import Testimonials from '../Testimonials'

const CustomerPageTemplate = ({ title, customertype, customertypeTitle, content, contentComponent, video, testimonials }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero is-primary is-bold is-medium hero-small'>
        <div className='hero-body'>
          <div className='container column is-two-thirds'>
            <h2 className='title has-text-centered has-text-weight-bold is-size-1'>
              {title}
            </h2>
          </div>
        </div>
        <VideoBG video={video} />
      </section>
      <section className='section section--gradient'>
        <div className='container'>

          <article className='content columns is-8 is-variable'>
            <div className='column'>
              <h2 className='has-text-weight-semibold is-size-3'>
                {customertypeTitle}
              </h2>
            </div>

            <PageContent className='column' content={content} />

          </article>

        </div>
      </section>

      <a id='testimonials' name='testimonials'></a>

      <section className='section'>

        <div className='container'>
  
          <hr />
        
          <h2 className='has-text-weight-semibold is-size-3 has-text-centered pt-6'>
            {customertype}
          </h2>

          <Testimonials testimonials={testimonials} />

        </div>
      </section>
    </div>
  )
}

CustomerPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  customertype: PropTypes.string,
  customertypeTitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
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
  testimonials: PropTypes.array,
}

export default CustomerPageTemplate
