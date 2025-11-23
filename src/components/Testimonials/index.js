import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({ testimonials }) => (
  <div className='columns statictestimonial-column my-6 is-centered is-multiline'>
    {testimonials.map((testimonial, i) => (
      <div className='column is-half' key={testimonial.author || testimonial.company || i}>
        <div className='card'>
          <article className='card-content'>
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
          </article>
        </div>
      </div>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      quote: PropTypes.string,
      author: PropTypes.string,
      company: PropTypes.string,
      backlink: PropTypes.string,
    }),
  ),
}

export default Testimonials
