import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ContactPageTemplate from '../components/ContactPageTemplate'
import Layout from '../components/Layout'

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        phone={frontmatter.phone}
        vanity_phone={frontmatter.vanity_phone}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        video={frontmatter.video}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        phone
        vanity_phone
        meta_title
        meta_description
        heading
        video {
          url
          type
        }
      }
    }
  }
`
