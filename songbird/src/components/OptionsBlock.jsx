import React from 'react'
import Variant from './Variant'

class OptionsBlock extends React.Component{
  state = {
    name: 'Бумеранг не запущен'
  };

  updateData = (value) => {
    this.setState({ name: value })
    console.log(this.state.name)
  }

  render(){
    return(
      <div className="options">
        <p>State:{this.state.name} </p>
        <Variant updateData={this.updateData} id='1'/>
        <Variant updateData={this.updateData} id='2'/>
        <Variant updateData={this.updateData} id='3'/>
        <Variant updateData={this.updateData} id='4'/>
        <Variant updateData={this.updateData} id='5'/>
        <Variant updateData={this.updateData} id='6'/>
      </div>
    )
  }
}

export default OptionsBlock