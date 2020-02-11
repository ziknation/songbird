import React from 'react'
import Circle from './Circle'
import birdsData from '../js/birdsData'

class Variant extends React.Component {
  render(){
    return (
      <div className="options--variant">
        <Circle />
        {birdsData[0][this.props.id - 1].name}
      </div>
    )
  }
}

export default Variant