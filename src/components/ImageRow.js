import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import ImageCard from './ImageCard'


function ImageRow({ urlImages, handleRemove }) {
  return (
    <div className="ImageRow-container">
        {urlImages.map((url) => (
            <ImageCard url={url} key={nanoid()} handleRemove={handleRemove} />
        ))}
    </div>
  )
}

ImageRow.propTypes = {
    urlImages: PropTypes.array,
}

export default ImageRow
