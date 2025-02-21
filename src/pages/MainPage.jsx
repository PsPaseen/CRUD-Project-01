import {Avatar, Flex, Typography } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { Sider } from "../component/Sider"
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const nav = useNavigate();

    const onLogout = useCallback(() => {
        localStorage.clear()
        nav('/')
    },[nav])

    return (<>
    {/* Row Col มี Css ให้เช่น display:'flex' */}
    {/* <Row style={{width:'100vw'}}>
    <Col span={18} push={6} style={{boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"}}>
      col-18 col-push-6
    </Col>
    <Col span={6} pull={18} >
      col-6 col-pull-18
    </Col>
  </Row> */}
    <Flex style={{width:'100vw'}}>
                <Flex vertical gap={30} style={{width:'20%', paddingTop: 20}}>
                    <Avatar size={64} icon={<UserOutlined />} style={{display:'flex', alignSelf:'center' }} onClick={onLogout}/>
                    <Sider/>
                </Flex>
                
                <Typography style={{width:'80%'}}>test</Typography>
    </Flex>
    </>)
}