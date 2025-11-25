import React from 'react'
import { Helmet } from "react-helmet-async"
import Content from '../Content'
import Logos from '../Logos'
import VideoBG from '../VideoBG'
import CustomerGroups from '../CustomerGroups'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const HomePageTemplate = ({
  title,
  heading,
  description,
  content,
  contentComponent,
  meta_title,
  meta_description,
  video,
  customergroups,
  testimonials,
}) => {

  const PageContent = contentComponent || Content

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>

      <section className='hero hero-large is-primary is-bold is-medium'>
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
                {heading}
              </h2>
            </div>

            <PageContent className='column' content={content} />
          </article>

          <hr className='my-6' />

          <aside className='content columns is-8 is-variable'>

            <div className='column'>
              <h2 className='has-text-weight-semibold is-size-3'>About Richard Pitt</h2>
            </div>

            <div className='column'>
              <p>I am passionate, trustworthy, caring and inspiring.</p>
              <p>Not many people know their purpose in life, with the help from some very learned people, I have managed to work the business bit out&hellip; Then I had to paint it, with oil paints, in less than 15 minutes!</p>
              <p>I can’t draw and I certainly can’t paint&hellip;</p>
              
              <Link className='button is-primary' to='/richard-pitt#why-do-it'>
                This is what I came up with &hellip;
              </Link>
            </div>

          </aside>

          <Testimonials testimonials={testimonials} />

        </div>


      </section>

      <Logos />

      <section className='section'>

        <div className='container'>

          <hr />

          <aside className='content columns is-8 is-variable v-centered py-6'>

            <div className='column'>
              <h3 className='has-text-weight-semibold is-size-3'>
                Target Clients
              </h3>
            </div>

            <div className='column'>
              <p>While Critical Friend Partnership specialises within the Insurance sector, the tools and principles apply equally in other sectors. Within the Insurance sector the main customer groups include:</p>
            </div>

          </aside>
          
          <CustomerGroups customergroups={customergroups} />

        </div>

      </section>

    </div>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
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
  customergroups: PropTypes.array,
  testimonials: PropTypes.array,
}

export default HomePageTemplate
