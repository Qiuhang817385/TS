import React, { Component } from 'react'
import { Button } from 'antd'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
interface Props {}
interface State {
  isLogin: boolean
}
// 麻烦,还不如之前那样直接类里面state
// export default class Home extends Component<Props, State> {
export default class Home extends Component {
  state = {
    isLogin: false,
    loaded: false,
  }
  componentDidMount() {
    axios.get('/isLogin').then((res) => {
      if (!res.data?.data) {
        this.setState({
          isLogin: false,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { isLogin, loaded } = this.state
    if (!isLogin) {
      return <Redirect to="/demo1"></Redirect>
    } else {
      if (loaded) {
        return (
          <>
            <Button type="primary">爬取</Button>
            <Button type="primary">展示</Button>
            <Button type="primary">退出</Button>
          </>
        )
      } else {
        return null
      }
    }
  }
}
