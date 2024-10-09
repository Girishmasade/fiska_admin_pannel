import { Table } from "antd";
import React from "react";

const Dashboard = () => {
  const columns = [
    {
      title: "Business name",
      width: 150,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
        title: "Business PAN",
        width: 150,
        dataIndex: "pan",
        key: "pan",
        fixed: "left",
      },
      {
        title: "Email",
        width: 150,
        dataIndex: "email",
        key: "email",
        fixed: "left",
      },
      {
        title: "Connection Type",
        width: 150,
        dataIndex: "connection",
        key: "connection",
        fixed: "left",
      },
      {
        title: "Authorised By",
        width: 150,
        dataIndex: "sent",
        key: "sent",
        fixed: "left",
      },
      {
        title: "Action",
        width: 150,
        key: 'operation',
        fixed: "left",
      },
  ];


  return (
    <div>
      <Table 
      columns={columns}
      pagination={false}
      />
    </div>
  );
};

export default Dashboard;
