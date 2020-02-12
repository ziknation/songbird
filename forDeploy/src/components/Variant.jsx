import React from 'react'
import Circle from './Circle.jsx'
import birdsData from '../js/birdsData.js'
import stateStorage from '../js/stateStorage.js'

class Variant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Бумеранг вернулся назад',
      color: 'grey'
    }
  }

  variantClick(e){
    e.currentTarget.children[0].classList.add("active_red")
  }

  // variantClick = e => {
  //   e.currentTarget.children[0].classList.add("active_red")
    //stateStorage.chosenId = this.props.id
    //this.props.updateData(this.state.name)
    //console.log(this.state)
    // this.setState(() {
    //   color: 'active_green'
    // })
  // }

  render(){
    return (
      <div className="options--variant" onClick={this.variantClick} id={this.props.id}>
        <Circle color={this.state.color}/>
        {birdsData[0][this.props.id - 1].name}
      </div>
    )
  }
}

export default Variant