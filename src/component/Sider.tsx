import { Menu, MenuProps } from "antd";
import React, { useState } from "react"
import { items } from "../navigation/nav_menu";

export const Sider = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
    return (
    
    <><Menu
    onClick={onClick}
    style={{ width: '100%', height:'90%' }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
    items={items}
  /></>)
}