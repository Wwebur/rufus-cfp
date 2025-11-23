import React from 'react'
import Content from '../Content'
import VideoBG from '../VideoBG'
import PropTypes from 'prop-types'
import OilPainting from '../../assets/img/richard-pitt-oil-painting.jpg'
import RichardPitt from '../../assets/img/richard-pitt.jpg'

const AboutPageTemplate = ({ title, content, contentComponent, video }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero hero-small is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container column is-two-thirds'>
            <h2 className='title has-text-centered has-text-weight-bold is-size-1'>
              {title}
            </h2>
          </div>
        </div>
        <VideoBG video={video} />
      </section>
      <section className='section section--gradient' id='why-do-it'>
        <div className='container content'>

          <div className='is-8 is-offset-2 is-medium column'>
            <h2>Why do I do what I do?</h2>
            <p>Not many people know their purpose in life. With the help of some very learned people, I managed to work out the business element of my purpose. Then, I had to paint it, with oil paints, in less than 15 minutes!</p>
            <p>I can’t draw and I certainly can’t paint. However, this is what I came up with&hellip;</p>
  
            <hr className='my-6' />

          </div>

          <article className='columns is-8 is-variable is-vcentered'>
            <div className='column'>
              <img src={OilPainting} alt='Richard Pitt Oil Painting' style={{borderRadius: '5px'}} />
            </div>
            <div className='column'>
              <h2>What does it mean?</h2>
              <p>The red blob in the middle is meant to represent my family, they rest at the centre of why I do what I do.</p>
              <p>The rest is meant to look like fireworks, these represent all the people and businesses that I have had the pleasure of helping. With the right support, they have transformed themselves and their business and as a result they have helped others, who have helped others, and so on.</p>
              <p>My purpose in life is to enable people and businesses to be the best they want to be. I love doing what I do. Those that know me will tell you how infectious and productive, positivity and clarity can be. There is no better job in the world!</p>
            </div>

          </article>

          <hr className='my-6' />

          <aside className='columns is-8 is-variable is-vcentered'>

            <PageContent className='column' content={content} />
            
            <div className='column'>
              <img src={RichardPitt} alt='Richard Pitt' style={{borderRadius: '5px'}} />
            </div>

          </aside>

        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
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
}

export default AboutPageTemplate
