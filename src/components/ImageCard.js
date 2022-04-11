import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

function ImageCard({ url, handleRemove }) {
  return (
    <div className="image-box">
      <img src={url.url} alt='' width={150} height={150} />
      <Button close className="btn-close" onClick={() => handleRemove(url.id)}/>
    </div>
  )
}
ImageCard.propTypes = {
  url: PropTypes.object
}

export default ImageCard
