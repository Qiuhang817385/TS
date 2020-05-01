import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import Router from './router'
import axios from 'axios'
axios.defaults.baseURL =
  'http://www.qiuhang.club:7300/mock/5eaa7ce100fbdf09dcf21fc4/ts'
ReactDOM.render(<Router />, document.getElementById('root'))
