import React from 'react'

const Painting = (props) => {
  let { painting:{title, image, artist: {name}, dimensions: {height, width}}} = props
  let paintingObj = props.painting
  return (
    <div className="ui card" onClick={() => {props.onSelectPainting(paintingObj)}}>
      <p>{`${title} by ${name}`}</p>
    </div>
  )
}

export default Painting
