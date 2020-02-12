import React from 'react'
import Header from './Header'
import QuestionBlock from './QuestionBlock'
import JointBlock from './JointBlock'
import NextLevel from './NextLevel'

class App extends React.Component{
  render(){
    return(
      <div>
      <Header />
      <QuestionBlock />
      <JointBlock />
      <NextLevel />
    </div>
    )
  }
}

export default App