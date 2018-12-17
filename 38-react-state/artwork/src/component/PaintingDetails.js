import React, {Component} from 'react'

const PaintingDetails = (props) => {
  return props.paintingToDisplay ? (
    <div>
      <div>
        <img alt={props.paintingToDisplay.title} src={props.paintingToDisplay.image} />
      </div>
      <p>{props.paintingToDisplay.title} by {props.paintingToDisplay.artist.name}</p>
      <p>{props.paintingToDisplay.dimensions.height} x {props.paintingToDisplay.dimensions.width}</p>
    </div>
  ) : null
}

export default PaintingDetails
