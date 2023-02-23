import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import LoginApi from '../api/login.api';
import RegisterAPI from '../api/register.api';

const SignInForm = (props) => {

  const navigate = useNavigate()

  const onFinish = async (values) => {

    const postRequest = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    }

    const response = await LoginApi.login(postRequest)
    const token = response.token;
    localStorage.setItem("accessToken", token);
    if (token) {
      navigate("form")
    }
  };




  const listUser = () => {
    const savedAccessToken = localStorage.getItem("accessToken");
  }

  return (<div style={{ marginTop: 20 }}>

    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}

      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      layout="vertical"
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        style={{ color: "white" }}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 16,
        }}
      >
        <div >
          <Button style={{ marginTop: 20 }} type="primary" htmlType="submit">
            Submit
          </Button>
        </div>



        <div >
          <Button onClick={() => { listUser() }} style={{ marginTop: 20 }} type="primary" htmlType="submit">
            Perform an authenticated request - list user
          </Button>
        </div>

      </Form.Item>
    </Form>


  </div >)
};
export default SignInForm;