import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet-async"
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import EstablishedBroker from '../components/EstablishedBroker'
import Layout from '../components/Layout'

const EstablishedBrokerPage = ({ data }) => {
  const { markdownRemark: post } = data

  console.log('video ==>', post.frontmatter.video)

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <EstablishedBroker
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        customertype={post.frontmatter.customertype}
        video={post.frontmatter.video}
        content={post.html}
        testimonials={post.frontmatter.testimonials}
      />
    </Layout>
  )
}

EstablishedBrokerPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EstablishedBrokerPage

export const customerPageQuery = graphql`
  query EstablishedBrokerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
        customertype
        video {
          url
          type
        }
        testimonials {
          image
          author
          company
          quote
          backlink
        }
      }
    }
  }
`
