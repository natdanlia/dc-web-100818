import React from 'react'

//functionally
//props.paintingObj
const Painting = (props) => {
  let {paintingObj: {title, image, artist: {name}, dimensions: {width, height}}} = props
  return (
    <div className="ui card">
      <div>
        <img alt={title} src={image} />
        </div>
      <p>{`${title} by ${name}`}</p>
      <p>{height} x {width}</p>
    </div>
  )
}

export default Painting
