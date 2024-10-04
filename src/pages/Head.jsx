import React from 'react';
import {Table, Tag } from 'antd';
import { head } from '../utils/HeadData';
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
    render: () => <a className='text-blue-500'>view</a>,
  },
];
const data = head.map(item => ({
  key: item.id,
  name: item.name,
  age: item.age,
  Pan: item.Pan,
  Email: item.Email,
  connection: item.connection,
  sent: item.sent
}));

const Head = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};
export default Head;