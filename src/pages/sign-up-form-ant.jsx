import { Button, Checkbox, Form, Input } from 'antd';

const SignUpForm = (props) => {

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
            style={{color: "white"}}
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
            style={{color: "white"}}
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
            <Button style={{marginTop : 20}} type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
    </div >)
};
export default SignUpForm;