import React from 'react'
import './card.css'

function CustomCard(props) {
  return (
    <div id='reps' className="card" style={{width: '10rem'}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>

  </div>
</div>
  )
}

export default CustomCard
