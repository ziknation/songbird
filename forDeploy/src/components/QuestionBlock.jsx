import React from 'react'
import BirdImage from './BirdImage.jsx'
import Player from './Player.jsx'
import BirdName from './BirdName.jsx'

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