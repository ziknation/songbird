import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header'
import QuestionBlock from './components/QuestionBlock'

render([<Header/>,<QuestionBlock/>], document.querySelector('#root'));