import React from 'react'
import Variant from './Variant.jsx'

class OptionsBlock extends React.Component{
  constructor(props) {
    super(props);
    //this.secondLevelCheck = this.secondLevelCheck.bind(this);

    this.state = {
      name: 'Бумеранг не запущен',
      //secondLevel: 'Working'
    }
  }

  // updateData = (value) => {
  //   this.setState({ name: value })
  // }

  componentWillMount(){
    if (this.state.name === 'Бумеранг вернулся назад'){
      this.secondLevelCheck()
    }
  }

  // secondLevelCheck(){
  //   this.props.updateData_2(this.state.name)
  // }

  render(){
    return(
      <div className="options">
        {/* <p>State:{this.state.name} </p> */}
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