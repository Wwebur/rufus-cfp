import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const VideoBG = ({ video }) => {
  const videoRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const sources = Array.isArray(video) ? video : video ? [video] : []

  useEffect(() => {
    const node = videoRef.current
    if (!node) {
      return undefined
    }

    const handleLoaded = () => setLoading(false)
    node.addEventListener('loadeddata', handleLoaded)

    return () => {
      node.removeEventListener('loadeddata', handleLoaded)
    }
  }, [])

  if (!sources.length) {
    return null
  }

  return (
    <video
      muted
      playsInline
      autoPlay
      loop
      id='videobg'
      ref={videoRef}
      style={{
        opacity: loading ? 0 : 1,
        transition: 'opacity, 2s ease-in-out',
      }}
    >
      {sources.map((videoitem, i) => (
        <source key={'backgroundvideo-' + i} src={videoitem.url} type={videoitem.type} />
      ))}
    </video>
  )
}

VideoBG.propTypes = {
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

export default VideoBG
