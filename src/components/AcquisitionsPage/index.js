import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import VideoBG from '../VideoBG'
import Testimonials from '../Testimonials'
import GearIcon from '../../assets/img/gear-icon.png'

const AcquisitionsPage = ({ title, customertype, content, contentComponent, video, testimonials }) => {
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
              <h2 className='has-text-weight-semibold is-size-2'>Six Life Stages Lead to ‘The Event’ for Your Insurance Brokerage</h2>
            </div>
            <div className='column mt-4'>
              <p>With six life stages to any business, the last stage, ‘The Event,’ is the moment when the seller looks to realise the value from what they have built. Often this reflects a lifetime of work. Typically, the seller only gets one chance to realise this value. Be sure to optimise this moment, don’t leave the process with only the buyer getting all the benefit.</p>

              <p><strong>Beware, buyers are hunting out uninformed sellers.</strong> Sellers who are unclear what is available to them, what the process looks like, how to protect staff and clients alike, and lastly, how to maximise the financial outcome. With insurance brokers generating consistent repeat income, the pace of Insurance Broker Mergers and Acquisitions (M&A) doesn’t seem to be letting up.</p>
            </div>
          </div>
          <hr />
          <div className='columns is-8 is-variable pt-6'>
            <div className='column'>
              <h2 className='has-text-weight-semibold is-size-2 content'>At every life stage there are opportunities, challenges and hurdles.</h2>
            </div>
            <div className='column mt-4'>
              <p>The insurance industry continues to face challenge and opportunity in equal measure. With an aging population of business owners, a general shortage of qualified talent, significant technological advancements, changing consumer needs, and an increase in regulatory oversight, the burden of running an insurance brokerage is not for all.</p> 
              <p>Whether you’re a buyer, a seller, or a broker considering the possibilities of M&A, understanding the key types of M&A activity, the key considerations to think about, and the process involved is essential to your success.</p>
            </div>
          </div>

          <div className='columns is-8 is-variable pt-6'>
            <div className='column'>
              <h2 className='has-text-weight-semibold is-size-2 content'>Four Key Transaction Types Shaping UK Insurance Broker M&A</h2>
              <p>There are several ways in which insurance brokers in the UK engage in M&A transactions, each with its own unique characteristics and objectives. The most common types include:</p>
            </div>
            <div className='column mt-4'>
              <ol>
                <li className='pt-3'> Asset Purchase: The acquiring firm buys specific assets, such as client portfolios, intellectual property, or equipment, but does not acquire the liabilities of the target firm. This is popular because it allows the acquirer to avoid taking on debts or legal obligations while gaining access to valuable client relationships and operational assets. These transactions tend to be quicker, more straightforward, and less costly. </li>
                <li className='pt-3'>Share Purchase: The acquiring firm buys the shares of the target brokerage, effectively taking over the entire business, including all assets and liabilities. This straightforward approach is the most common for acquiring full ownership of a brokerage.</li>
                <li className='pt-3'>Management Buyout (MBO): The management team buys out the company from its existing owners, typically with external financing such as private equity or loans. MBOs are pursued when owners want to exit, but the management team believes in the business’s future growth potential.</li>
                <li className='pt-3'>Private Equity-Backed Acquisition: Private equity firms acquire brokerages to improve performance and sell for a profit, often through restructuring, cost-cutting, or expansion. This is common when firms see opportunities to enhance value over a 3-5 year period.</li>
              </ol>
              <p>Whether you’re a buyer, a seller, or a broker considering the possibilities of M&A, understanding the key types of M&A activity, the key considerations to think about, and the process involved is essential to your success.</p>
            </div>
          </div>

          <div className='columns is-8 is-variable pt-6'>
            <div className='column'>
              <h2 className='has-text-weight-semibold is-size-2 content'>Five Critical Considerations for Buyers to Ensure M&A Success</h2>
            </div>
            <div className='column mt-4'>
              <ol>
                <li className='pt-3'><strong>It’s all about the people.</strong> At the end of the day, it’s the people that the buyer is buying, they look after the clients. If the buyer isn’t prepared to take the seller home to happily meet their family, then don’t do the deal. Often, buyers get Deal Dazzle, convincing themselves they must do the deal and that they can change the people. This is often a very costly mistake.</li>
                <li className='pt-3'><strong>Start off small.</strong> If you are new to this arena, it is always better to start off small, learn on the job. See what works and what doesn’t. By starting small, the buyer can avoid costly mistakes and instead learn along the way. Smaller deals tend to be less extravagant and costly.</li>
                <li className='pt-3'><strong>Cultural fit.</strong> If you get a feeling that the seller’s culture and values are not aligned to yours, then walk away. Culture is what happens in a business when the boss is away, and the buyer cannot be there the whole time, watching what’s going on.</li>
                <li className='pt-3'><strong>Make sure the numbers work and track the performance.</strong> When a buyer makes an acquisition, they will have probably financially modelled the value of the acquired business in their hands. The buyer will have convinced themselves that this is a good deal to do. It is essential that the buyer tracks the improvements that have been assumed in the buyer’s model. Often, buyers make these assumptions, and the intended upsides never fully materialise.</li>
                <li className='pt-3'><strong>Be upfront with the seller.</strong> If the buyer plans to make changes or has made assumptions about what they plan to do with the business, the buyer is always better off telling the seller of these changes before completing the deal.</li>
              </ol>
            </div>
          </div>

          <div className='columns is-8 is-variable pt-6'>
            <div className='column'>
              <h2 className='has-text-weight-semibold is-size-2 content'>Eight Key Stages in the M&A Process for Insurance Brokers</h2>
              <p>The M&A process, if planned, should take between 12 and 18 months. Here are the key stages:</p>
            </div>
            <div className='column mt-4'>
              <ul>
                <li className='pt-3'>Decision to Sell/Buy: Many processes start unexpectedly. The seller is approached out of the blue, and for a wide variety of reasons, expresses interest in finding out what the business is worth. All too often, the process starts without any conscious decision to sell and without preparation or optimisation.</li>
                <li className='pt-3'>Non-Disclosure Agreement (NDA): Most recognised buyers have their own NDA, which, if written correctly, ensures information is used only for its intended purpose.</li>
                <li className='pt-3'>Information Memorandum (IM): A good seller will have a comprehensive IM containing all necessary information to spark buyer interest and secure an attractive valuation. The better the IM, the more confident the buyer becomes.</li>
                <li className='pt-3'>Terms Sheet & Exclusivity: Also called the ‘offer letter,’ the terms sheet is typically non-binding and subject to due diligence. A comprehensive terms sheet simplifies drafting the legal agreement and includes a period of exclusivity.</li>
                <li className='pt-3'>Due Diligence (DD): This intrusive, comprehensive process allows the buyer to examine every aspect of the seller’s business. It is time-consuming and often frustrating, as the seller continues running the business while answering multiple queries.</li>
                <li className='pt-3'>Change of Control (COC): Not required for all transactions, this process can take up to six months.</li>
                <li className='pt-3'>Legal Agreement: Typically, a Share Purchase Agreement (SPA) or Asset Purchase Agreement (APA) forms the legal basis, including purchase price, calculation method, warranties, indemnities, and restrictions.</li>
                <li className='pt-3'>Completion: The deal is done—time to celebrate! However, the seller must ensure the business performs as promised.</li>
              </ul>
            </div>
          </div>

          <hr />

          <div className='columns is-8 is-variable pt-6'>
            <div className='column'>
              <h2 className='has-text-weight-semibold is-size-2 content'>M&A as a Strategic Growth Tool for Your Brokerage</h2>
            </div>
            <div className='column'>
              <p>Mergers and acquisitions in the UK insurance broking sector offer significant opportunities for growth, innovation, and diversification. Whether you’re a buyer seeking to expand your market presence, a seller looking to exit, or a brokerage exploring new opportunities, understanding the M&A landscape is crucial for navigating the complexities of these transactions.</p>
            </div>
          </div>

          <div className='columns is-8 is-variable pt-6 has-background-light is-rounded p-6 mt-6'>

            <div className='column is-8 mx-auto has-text-centered'>
              <h2 className='has-text-weight-semibold is-size-1'>Critical Friend Partnership: <br/>Your Trusted M&A Partner</h2>
              <div className='content'>
                <p>Critical Friend Partnership specialises in helping insurance brokers navigate the M&A process. From identifying potential targets or acquirers to executing seamless transactions, we are committed to your success. Contact us today to explore how we can help you achieve your business goals through strategic mergers and acquisitions.</p>
                <button class="button is-link my-4" href="/contact" title='Book A Clarity Call with Richard'>Book Your Clarity Call Today</button>
              </div>
            </div>
          </div>
        </article>
      </section>

      <a id='testimonials' name='testimonials'></a>

      <section className='section'>

        <div className='container'>
        
          <h2 className='has-text-weight-semibold is-size-3 has-text-centered pt-6'>
            Contact Us to Begin Your M&A Journey like so many others
          </h2>

          <Testimonials testimonials={testimonials} />

        </div>
      </section>
    </div>
  )
}

AcquisitionsPage.propTypes = {
  title: PropTypes.string.isRequired,
  customertype: PropTypes.string.isRequired,
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

export default AcquisitionsPage
