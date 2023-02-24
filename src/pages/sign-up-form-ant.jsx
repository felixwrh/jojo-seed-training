import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import RegisterAPI from '../api/register.api';
import UserApi from '../api/user.api';

const SignUpForm = (props) => {


    const [userList, setUserList] = useState([])

    const onFinish = async (values) => {
        console.log('Success:', values);

        const postRequest = {
            email: values.Email,
            password: values.password
        }
        const data = await RegisterAPI.register(postRequest)
        const token = data.token

        localStorage.setItem("access_token", token)
    };



    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ marginTop: 20 }}>

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
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
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
                    label="Email"
                    name="Email"
                    style={{ color: "white" }}
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        { pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Email Format pls' },
                        { min: 5, message: 'min 5 chars pls' },
                    ]}
                >
                    <Input />
                </Form.Item>



                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        { min: 5, message: 'min 6 chars pls' },
                    ]}
                >
                    <Input.Password />
                </Form.Item>



                <Form.Item
                    wrapperCol={{
                        span: 16,
                    }}
                >
                    <Button style={{ marginTop: 20 }} type="primary" htmlType="submit">
                        Submit
                    </Button>

                </Form.Item>
            </Form>
        

        </div >)
};
export default SignUpForm;