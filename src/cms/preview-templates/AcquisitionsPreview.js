import React from 'react'
import PropTypes from 'prop-types'
import CustomerPageTemplate from '../../components/CustomerPageTemplate'

const AcquisitionsPreview = ({ entry, widgetFor }) => (
  <CustomerPageTemplate
    title={entry.getIn(['data', 'title'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    video='video'
    meta_description={entry.getIn(['data', 'meta_description'])}
    content={widgetFor('body')}
  />
)

AcquisitionsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AcquisitionsPreview
