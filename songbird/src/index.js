import React from 'react'
import {render} from 'react-dom'
import Header from './components/Header'
import QuestionBlock from './components/QuestionBlock'
import JointBlock from './components/JointBlock'
import NextLevel from './components/NextLevel'

import './scss/base.scss'

render([<Header/>,<QuestionBlock/>,<JointBlock />, <NextLevel />], document.querySelector('#root'));
