import React from 'react';
import TopLogo from './TopLogo.jsx'
import TopScore from './TopScore.jsx'

function Top(){
  return(
    <div className="header--top">
      <TopLogo />
      <TopScore />
    </div>
  )
}

export default Top