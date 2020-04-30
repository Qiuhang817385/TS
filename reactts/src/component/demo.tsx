import React, { ReactElement, ChangeEvent, useState } from 'react'
import { Button, Form, Input, Checkbox } from 'antd'
import './login.css'
import { LockOutlined } from '@ant-design/icons'
interface Props {}
const Demo: React.FC = ({}: Props): ReactElement => {
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target?.value)
  }

  return (
    <div className="wrappers">
      <Form
        form={form}
        name="normal_login"
        className="login-form login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          hasFeedback
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
            {
              max: 6,
              message: '最大长度为6位',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Demo

// import React, { ReactElement } from 'react'
// interface Props {
// }
// export default function demo({}: Props): ReactElement {
//   return (
//     <div>

//     </div>
//   )
// }
