import React, { useState} from 'react';
import { Table, Tag} from 'antd';
import { head } from '../utils/HeadData';
import UserDetails from './UserDetails';

const Head = () => {

const [isVisible, setisVisible] = useState(null)

const columns = [
  {
    title: 'Business name',
    width: 150,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Business PAN',
    width: 100,
    dataIndex: 'Pan',
    key: 'Pan',
    fixed: 'left',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
    width: 150,
  },
  {
    title: 'Connection Type',
    dataIndex: 'connection',
    key: 'connection',
    width: 150,
    render: (text) => {
      if (Array.isArray(text)) {
        return text.map((type) => {
          let color = type.toLowerCase() === 'vendor' ? 'blue' : 'red';
          return <Tag color={color} key={type} className='text-sm'>{type}</Tag>;
        });
      } else {
        let color = text.toLowerCase() === 'vendor' ? 'blue' : 'red';
        return <Tag color={color} className='text-sm'>{text}</Tag>;
      }
    },
  },
  {
    title: 'Authorised By',
    dataIndex: 'sent',
    key: 'sent',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: (record) => <a href='#' onClick={() => handleview(record)}>view</a>,
  },
];

const handleview = (record) => {
  setisVisible(record)
}

const data = head.map(item => ({
  key: item.id,
  name: item.name,
  Pan: item.Pan,
  Email: item.Email,
  connection: item.connection,
  sent: item.sent,
}));

 
  return (
    <>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      />
       {isVisible &&  <UserDetails data={isVisible}/>}
    </>
  );
};

export default Head;