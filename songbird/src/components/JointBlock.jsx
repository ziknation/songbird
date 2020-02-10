import React from 'react'
import OptionsBlock from './OptionsBlock'
import AnswerBlock from './AnswerBlock'

function JointBlock(){
  return(
    <div className="joint_block">
      <OptionsBlock />
      <AnswerBlock />
    </div>
  )
}

export default JointBlock