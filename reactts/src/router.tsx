import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Demo1 from './component/demo'
import Demo3 from './component/demo3'
import App from './App'
interface Props {}
interface State {}
export default class Erouter extends Component<Props, State> {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/demo1" component={Demo1}></Route>
            <Route path="/demo3" component={Demo3}></Route>
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}
