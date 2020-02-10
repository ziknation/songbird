import React from 'react'
import Circle from './Circle'
import birdsData from '../js/birdsData'

function Variant(props){
  return (
    <div className="options--variant">
      <Circle />
      {birdsData[0][props.id - 1].name}
    </div>
  )
}

export default Variant