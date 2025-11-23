import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'

const TestimonialsCarousel = ({ testimonialCarousel }) => (
  <Carousel
    className='card'
    style={{ borderRadius: '5px' }}
    renderCenterLeftControls={({ previousSlide }) => (null)}
    renderCenterRightControls={({ nextSlide }) => (null)}
  >

    {testimonialCarousel.map((testimonial, i) => (
      <article key={'testimonialarticle-' + i}>
        <div className='card-content'>
          <div className='media'>
            <div className='media-left'>
              <figure className='image is-64x64'>
                <img className='is-rounded' src={testimonial.image} />
              </figure>
            </div>
            <div className='media-content testimonial-nametag'>
              <cite className='has-text-weight-semibold'>{testimonial.author}</cite>
              <br />
              <a href={testimonial.backlink} title={'Visit the ' + testimonial.company + ' website'} target='_blank' rel='noreferrer'>{testimonial.company}</a>
            </div>
          </div>
          <div className='content'>

            {testimonial.quote}

          </div>

        </div>
        <footer className='cardFooter'>
          <p className='card-footer-item'></p>
        </footer>
      </article>
    ))}

  </Carousel>
)

TestimonialsCarousel.propTypes = {
  testimonialCarousel: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      quote: PropTypes.string,
      author: PropTypes.string,
      company: PropTypes.string,
      backlink: PropTypes.string,
    }),
  ),
}

export default TestimonialsCarousel
