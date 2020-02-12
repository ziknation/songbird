import React from 'react'
import OptionsBlock from './OptionsBlock.jsx'
import AnswerBlock from './AnswerBlock.jsx'

class JointBlock extends React.Component{
  // state={
  //   secondLevel: 'Not Working'
  // }

  // updateData_2 = (value) => {
  //   this.setState({ secondLevel: value })
  // }

  render(){
    return(
      <div className="joint_block">
        {/* {this.state.secondLevel} */}
        <OptionsBlock updateData_2={this.updateData_2}/>
        <AnswerBlock />
      </div>
    )
  }
}

export default JointBlock