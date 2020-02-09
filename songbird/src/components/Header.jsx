import React from 'react';
import Top from './Top'
import List from './List'

function Header(){
  return(
    <div className="header">
      <Top />
      <List />
    </div>
  )
}

export default Header