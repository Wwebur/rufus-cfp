import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/Layout'

const SuccessPage = () => {
  return (
    <div>
      <Helmet>
        <body className='contact' />
      </Helmet>

      <Layout>
        <section className='hero hero-large is-primary is-bold is-large'>
          <div className='hero-body has-text-centered'>
            <h1 className='title'>
              Thank you. I will be in touch soon
            </h1>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default SuccessPage
