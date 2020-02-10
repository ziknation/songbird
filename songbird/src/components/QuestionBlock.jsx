import React from 'react'
import BirdImage from './BirdImage'
import Player from './Player'
import BirdName from './BirdName'

function QuestionBlock(){
  return (
    <div className='question_block'>
      <BirdImage />
      <div className="question_block--question">
        <BirdName />
        <hr/>
        <Player />  
      </div>
    </div>
  )
}

export default QuestionBlock