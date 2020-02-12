import React from 'react'
import Header from './Header.jsx'
import QuestionBlock from './QuestionBlock.jsx'
import JointBlock from './JointBlock.jsx'
import NextLevel from './NextLevel.jsx'

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