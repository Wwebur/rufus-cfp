import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import VideoBG from '../VideoBG'
import Testimonials from '../Testimonials'
import GearIcon from '../../assets/img/gear-icon.png'

const EstablishedBroker = ({ title, customertype, content, contentComponent, video, testimonials }) => {
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
        <article className='container content'>
          <div className='columns is-8 is-variable pb-6'>
            <div className='column'>
              <h2 className='has-text-weight-semibold is-size-3'>Six life stages to any established Insurance Broker</h2>
            </div>
            <div className='column'>
              <p>There are only 6 life stages to any business. Often the two most important stages are left under-explored, these are <strong>Growth</strong> and <strong>Prepare</strong>. As a result, the <strong>Event</strong> stage leaves unrealised opportunities for the buyer to take advantage of. This means that your staff can be left feeling unfulfilled, and cash that should be in your pocket, remains with the buyer. Miss these two vital stages at your peril.</p>

              <p>Critical Friend Partnership will work with you to ensure you do not miss out on any opportunity along your journey.</p>
            </div>
          </div>


          <section className='business-stages-desktop'>

              <div className='tile is-ancestor'>
                <div className='tile is-parent'>

                  <span className='tile'></span>
                  <div className='tile is-child is-3 has-text-centered'>
                    <span className='tag is-primary is-large mb-4'>Start Up</span>
                    <p><strong>Stage 1:</strong> It’s frantic, you typically chase everything to survive</p>
                  </div>
                  <span className='tile'></span>

                </div>
              </div>


              <div className='tile is-ancestor'>

                <div className='tile is-parent is-3 is-vertical'>

                  <div className='tile is-child has-text-centered'>
                    <span className='tag is-primary is-large mb-4'>The Event</span>
                    <p><strong>Stage 6:</strong> Crystallise the asset, pass the business onto the next generation or sell it</p>
                  </div>

                  <span className='tile'></span>


                  <div className='tile is-child has-text-centered'>
                    <span className='tag is-primary is-large mb-4'>Prepare</span>
                    <p><strong>Stage 5:</strong> The most important stage that most do not do. Getting the business ready for ‘The Event’</p>
                  </div>


                </div>

                <div className='tile is-parent is-6'>
                  <div className='is-child tile'>
                    <img src={GearIcon} alt='Business Life Stages' />
                  </div>
                </div>

                <div className='tile is-parent is-3 is-vertical'>

                  <div className='tile is-child has-text-centered'>
                    <span className='tag is-primary is-large mb-4'>Established</span>
                    <p><strong>Stage 2:</strong> You pause, you’ve got a business, now you need to recruit some help or move to Maintain</p>
                  </div>

                  <span className='tile'></span>


                  <div className='tile is-child has-text-centered'>
                    <span className='tag is-primary is-large mb-4'>Growth</span>
                    <p><strong>Stage 3:</strong> The most difficult stage - You achieve double digit organic income growth, year after year</p>
                  </div>

                </div>

              </div>

              <div className='tile is-ancestor'>

                <div className='tile is-parent'>

                  <span className='tile'></span>
                  <div className='tile is-child is-3 has-text-centered'>
                    <span className='tag is-primary is-large mb-4'>Maintain</span>
                    <p><strong>Stage 4:</strong> A business that funds a lifestyle. It feels comfortable and cosy</p>
                  </div>
                  <span className='tile'></span>

                </div>
              </div>

          </section>

          <section className='business-stages-tablet'>

              <img src={GearIcon} alt='Business Life Stages' />

              <dl>
                <dt className='mb-4'>
                  <span className='tag is-primary is-large'>Start Up</span>
                </dt>
                <dd className='mx-0'>
                  <p><strong>Stage 1:</strong> It’s frantic, you typically chase everything to survive</p>
                  <hr />
                </dd>
              </dl>

              <dl>
                <dt className='mb-4'>
                  <span className='tag is-primary is-large'>Established</span>
                </dt>
                <dd className='mx-0'>
                  <p><strong>Stage 2:</strong> You pause, you’ve got a business, now you need to recruit some help or move to Maintain</p>
                  <hr />
                </dd>
              </dl>

              <dl>
                <dt className='mb-4'>
                  <span className='tag is-primary is-large'>Growth</span>
                </dt>
                <dd className='mx-0'>
                  <p><strong>Stage 3:</strong> The most difficult stage - You achieve double digit organic income growth, year after year</p>
                  <hr />
                </dd>
              </dl>

              <dl>
                <dt className='mb-4'>
                  <span className='tag is-primary is-large'>Maintain</span>
                </dt>
                <dd className='mx-0'>
                  <p><strong>Stage 4:</strong> A business that funds a lifestyle. It feels comfortable and cosy</p>
                  <hr />
                </dd>
              </dl>

              <dl>
                <dt className='mb-4'>
                  <span className='tag is-primary is-large'>Prepare</span>
                </dt>
                <dd className='mx-0'>
                  <p><strong>Stage 5:</strong> The most important stage that most do not do. Getting the business ready for ‘The Event’</p>
                  <hr />
                </dd>
              </dl>


              <dl>
                <dt className='mb-4'>
                  <span className='tag is-primary is-large'>The Event</span>
                </dt>
                <dd className='mx-0'>
                  <p><strong>Stage 6:</strong> Crystallise the asset, pass the business onto the next generation or sell it</p>
                  <hr />
                </dd>
              </dl>

          </section>

          <hr className='my-6 is-hidden-touch' />

          <div className='columns is-8 is-variable pt-6'>

            <div className='column'>
              <h2 className='has-text-weight-semibold is-size-3'>At every life stage there are opportunities, challenges and hurdles.</h2>
            </div>

            <div className='column'>
              <p>Critical Friend Partnership will help you along every step of that journey, whether you find yourself:</p>
              <ul>
                <li>with a lack of new clients</li>
                <li>run off your feet with no time to spare</li>
                <li>not knowing which way to turn or path to choose</li>
                <li>with people challenges </li>
                <li>with a lack of financial resources</li>
              </ul>
              <p>Uniquely, Critical Friend Partnership is able to operate as both a Non-Exec to your business and an exclusive consultancy service in a collaborative manner. It seeks to understand before providing guidance. It provides easy to implement and proven best practice to mitigate many of the challenges; insight to grasp the opportunities; support to assist with execution and to have some fun along the exciting journey ahead. </p>
            </div>

          </div>
        </article>
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

EstablishedBroker.propTypes = {
  title: PropTypes.string.isRequired,
  customertype: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  video: PropTypes.array,
  testimonials: PropTypes.array,
}

export default EstablishedBroker