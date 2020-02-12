import React from 'react';
import Top from './Top.jsx'
import List from './List.jsx'

function Header(){
  return(
    <div className="header">
      <Top />
      <List />
    </div>
  )
}

export default Header