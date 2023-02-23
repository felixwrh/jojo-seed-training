import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import UserApi from '../api/user.api';

const SignUpForm = (props) => {


    const [userList, setUserList] = useState([])

    const onFinish = (values) => {
        console.log('Success:', values);
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
                        {
                            required: true,
                            message: 'Please input your Email!',
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
                    wrapperCol={{
                        span: 16,
                    }}
                >
                    <Button style={{ marginTop: 20 }} type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <div>
                        <Button onClick={async () => {
                            console.log("listing users")
                            const data = await UserApi.listUsers(2);
                            console.log(data.data)
                            setUserList(data.data)
                        }} style={{ marginTop: 20 }} type="primary">
                            List User
                        </Button>
                    </div>

                    <div>
                        <Button onClick={async () => {
                            console.log("fetch user by id")
                            const data = await UserApi.singleUser(7)
                            console.log(data)
                        }}
                            style={{ marginTop: 20 }} type="primary">
                            User By id
                        </Button>
                    </div>
                    <div>
                        <Button onClick={async () => {
                            console.log("create a new user")
                            const data = await UserApi.create({name : "Jojo", job : "dataGod"})
                            console.log(data)
                        }} style={{ marginTop: 20 }} type="primary">
                            Create User
                        </Button>
                    </div>
                </Form.Item>
            </Form>
            {/* User View */}
            {
                userList.map((elem, index) => {
                    return <div key={index}>
                        <img src={elem.avatar} />
                        <span style={{ display: "block", color: "#fff" }}>{elem.first_name}</span>
                        <span style={{ display: "block", color: "#fff" }}>{elem.email}</span>
                    </div>
                })
            }

        </div >)
};
export default SignUpForm;