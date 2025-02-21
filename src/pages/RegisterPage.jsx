import { Form, Input, Button , Flex , Typography } from 'antd';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const nav = useNavigate()

    const onBack = useCallback(() => {
        nav('/')
    },[nav])

    return (
      <div style={{alignSelf:'center' ,width: 400, height: 350, margin: '0 auto', paddingTop: 50, padding: 20, borderRadius: 16 ,boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" }} >
        <h2 style={{color: 'black', textAlign:'center'}}>Register</h2>
        <Form
          name="login"
          // onFinish={onFinish}
          autoComplete="off"
        >
          <Flex vertical gap={48}>
            <Flex vertical gap={24}>
              <Flex style={{height: 32, paddingTop: 32}} gap={10}>
                <Typography style={{alignSelf: 'center' , width: 63}} >Username</Typography>
                <Form.Item className='fieldbox'
                name="loginName"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
              </Flex>

              <Flex style={{height: 32}} gap={10}>
                <Typography style={{alignSelf: 'center' , width: 63}} >Password</Typography>
                <Form.Item className='fieldbox'
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>
              </Flex>
      
            </Flex>
          
            <Flex vertical gap={12}>
                <Form.Item >
                    <div> 
                      <Button type="primary" htmlType="submit" block >Register</Button>
                    </div>
                    </Form.Item>
                  <div > 
                    <Button type="dashed" variant='outlined' onClick={onBack} >Go Back</Button>
                  </div>
            </Flex>
          
          </Flex>
        </Form>
      </div>
    );
}

export default RegisterPage
