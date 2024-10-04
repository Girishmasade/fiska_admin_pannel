import React from 'react'
import { Menu } from 'antd'
import {AppstoreOutlined, LineChartOutlined, UserOutlined} from '@ant-design/icons'
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineVpnKey } from "react-icons/md";

function NavbarMenu() {
  return (
    <>
     <Menu.Item icon={<AppstoreOutlined />} className='hover:text-green-500'>
        <a href="#" >Dashboard</a>
    </Menu.Item> 
    <Menu.Item icon={<FaRegHandshake />} className='hover:text-green-500'>
        <a href="#">Connected businesses</a>
    </Menu.Item> 
    <Menu.Item  icon={<MdOutlineVpnKey />} className='hover:text-green-500'>
        <a href="#">Authorised Businesses</a>
    </Menu.Item> 
    <Menu.Item  icon={<HiOutlineBuildingOffice2 />} className='hover:text-green-500'>
        <a href="#">My business</a>
    </Menu.Item> 
    <Menu.Item  icon={<LineChartOutlined />} className='hover:text-green-500'>
        <a href="#">Reports</a>
    </Menu.Item> 
    <Menu.Item  icon={<UserOutlined />} className='hover:text-green-500'>
        <a href="#">User Management</a>
    </Menu.Item> 
    </>
  )
}

export default NavbarMenu
