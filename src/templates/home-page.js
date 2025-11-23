import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { markdownRemark: post } = data

  return (
    <Layout>
      <HomePageTemplate

        contentComponent={HTMLContent}

        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        video={frontmatter.video}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        content={post.html}
        description={frontmatter.description}
        customergroups={frontmatter.customergroups}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      contentComponent: PropTypes.func,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        video {
          url
          type
        }
        customergroups {
          groupname
          image
          link
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
