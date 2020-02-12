import React from 'react'
import Circle from './Circle'
import birdsData from '../js/birdsData'
import stateStorage from '../js/stateStorage'

class Variant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Бумеранг вернулся назад'}
  }

  variantClick = e => {
    e.currentTarget.children[0].classList.add("active_green")
    stateStorage.chosenId = this.props.id
  }

  render(){
    return (
      <div className="options--variant" onClick={() => { this.props.updateData(this.state.name)}}  onClick={this.variantClick} id={this.props.id}>
        <Circle />
        {birdsData[0][this.props.id - 1].name}
      </div>
    )
  }
}

export default Variant