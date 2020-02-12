import React from 'react'

function Circle(props){
  const classes = 'circle '
  if (props.color){
    //classes += props.color
    console.log(props.color)
  }
  return (
    <div className="circle"></div>
  )
}

export default Circle