import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PrivacyPageTemplate from '../components/PrivacyPageTemplate'
import Layout from '../components/Layout'

const PrivacyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  
  return (
    <Layout>
      <PrivacyPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Layout>
  )
}

PrivacyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PrivacyPage

export const contactPageQuery = graphql`
  query PrivacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
      }
    }
  }
`
