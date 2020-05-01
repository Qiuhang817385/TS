import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
// const { SubMenu } = Menu
// interface props {
// }
const App: React.FC = (props) => {
  const [current, setCurrent] = useState<string>('')
  const handleClick = (event: any): void => {
    // console.log()
    setCurrent(event.key)
  }

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="demo1">
          <Link to="demo1">Demo1</Link>
        </Menu.Item>
        <Menu.Item key="demo2">
          <Link to="demo2">Home2</Link>
        </Menu.Item>
        <Menu.Item key="demo3">
          <Link to="demo3">Demo3</Link>
        </Menu.Item>
      </Menu>
      {props.children}
    </div>
  )
}

export default App
