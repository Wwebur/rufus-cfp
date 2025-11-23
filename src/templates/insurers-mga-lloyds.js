import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import CustomerPageTemplate from '../components/CustomerPageTemplate'
import Layout from '../components/Layout'

const InsurersPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <CustomerPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        customertype={post.frontmatter.customertype}
        customertypeTitle={post.frontmatter.customertypeTitle}
        video={post.frontmatter.video}
        content={post.html}
        testimonials={post.frontmatter.testimonials}
      />
    </Layout>
  )
}

InsurersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default InsurersPage

export const customerPageQuery = graphql`
  query InsurersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
        customertype
        customertypeTitle
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
