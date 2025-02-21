import { Form, Input, Button , Flex, Typography } from 'antd';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../api/api';
import Swal from 'sweetalert2'
import '../css/fieldbox_login.css'

const LoginPage = () => {
    const nav = useNavigate();
    const [form] = Form.useForm();

    const onRegister = useCallback(() => {
        nav('/register')
    },[nav])

    const onFinish = async (values) => {

      try {
        console.log(`=== ${values.loginName} , ${values.password} ===`)
         const res = await postLogin(values)
         if(res.status === 200){
          Swal.fire({
            title: 'Success!',
            icon: "success",
            timer: 1000,
            timerProgressBar: true,
          }).then(() => {
            nav('/main')
          })
         }
      } catch (error) {
        console.log(`=== ${error} ===`)
        form.resetFields()
        Swal.fire({
          title: 'Error!',
          icon: "error",
          text: `has: ${error} กรุณา Login อีกครั้ง`,
          timer: 3000,
          timerProgressBar: true,
          confirmButtonText: 'รับทราบ'
        })
      }
    };


    return (
      <>
       <div style={{alignSelf:'center',width: 400, height: 350, margin: '0 auto', paddingTop: 50, padding: 20, borderRadius: 16 ,boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" }} >
          <h2 style={{color: 'black' ,textAlign:'center'}}>Login</h2>
          <Form
            name="login"
            onFinish={onFinish}
            autoComplete="off"
            form={form}          >
            <Flex vertical gap={48}>
              <Flex vertical gap={24}>
                <Flex style={{height: 32, paddingTop: 32}} gap={10}>
                  <Typography style={{alignSelf: 'center' , width: 63}} >Username</Typography>
                  <Form.Item className='fieldbox'
                  name="loginName"
                  rules={[{ required: true, message: 'Please input your username' }]}
                >
                  <Input />
                </Form.Item>
                </Flex>

                <Flex style={{height: 32}} gap={10}>
                  <Typography style={{alignSelf: 'center' , width: 63}} >Password</Typography>
                  <Form.Item className='fieldbox'
                    name="password"
                    rules={[{ required: true, message: 'Please input your password' }]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Flex>
        
              </Flex>
            
              <Flex vertical gap={12}>
                <Form.Item >
                    <div> 
                      <Button type="primary" htmlType="submit" block >Log in</Button>
                    </div>
                    </Form.Item>

                    <div > 
                      <Button type="dashed" variant='outlined' onClick={onRegister} >Register</Button>
                    </div>
              </Flex>
            
            </Flex>
          </Form>
        </div>

      </>
       
        
      );
}

export default LoginPage;
