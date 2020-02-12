import React from 'react'
import BirdImage from './BirdImage'
import BirdName from './BirdName'
import LatinName from './LatinName'
import Player from './Player'
import stateStorage from '../js/stateStorage'

class AnswerBlock extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isVariantChosen: false };
  }

  componentWillMount(){
    if (stateStorage.chosenId !== ''){
      this.setState({
        isVariantChosen: true
      })
    };
  }

  render(){
    const wrapper = (
      <div>
        <div className="answer">
          <BirdImage />
          <div className="answer--bird">
            <BirdName />
            <hr/>
            <LatinName />
            <hr/>
            <Player />
          </div>
        </div>
        <p className="bird_info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Libero enim sed faucibus turpis in eu mi bibendum. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.
          Vitae tempus quam pellentesque nec nam aliquam sem et.
        </p>
      </div>)
    const stub = <p className="stub">Послушайте плеер. <br/>Выберите птицу из списка</p>
    
    const filling = this.state.isVariantChosen ? wrapper : stub
    
    return (    
      <div className="wrapper">
        {filling}
      </div>
    )
  }
}

export default AnswerBlock