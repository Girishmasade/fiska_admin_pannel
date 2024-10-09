import React from 'react'
import {Checkbox ,Card } from "antd";
import { PlusOutlined} from '@ant-design/icons';

function DataAccess() {
  return (
    <div className="w-full pt-6">
    <Card
      type="inner"
      title="REQUEST DATA TO"
      extra={
        <a href="#" className="text-blue-500">
          change
        </a>
      }
      className="bg-gray-100 rounded-none"
    >
      <div className="grid grid-rows-3">
        <div className="flex gap-1">
          <h2>Deepesh Khatri and Associates</h2>
          <p className="text-blue-500 bg-blue-200 p-1 relative bottom-2 m-2">
            Vendor
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <span>Name</span>
            <p>John Doe</p>
          </div>
          <div>
            <span>Email</span>
            <p>johndoe@gmail.com</p>
          </div>
          <div>
            <span>Business PAN</span>
            <p>ABCDE1234F</p>
          </div>
        </div>

        <div className="pt-2">
          <span>Message</span>
          <p>-</p>
        </div>
      </div>
    </Card>
    <div className="flex pt-8 pb-2 justify-between">
      <h2>DATA ACCESSES</h2>
      <Checkbox>select all</Checkbox>
    </div>
    <hr />

    <div className="pt-2">
        <ul className="space-y-3 text-sm">
          <li className="flex gap-2 text-gray-400">
            <input
              type="checkbox"
              checked
              style={{color: 'gray'}}
              className="relative bottom-3"
            />
            <p>
              Basic KYC (Business type, Ministry Of Corporate Affairs
              Status (MCA), GST, PAN, Udyam (MSME), Bank Account
              Details)
            </p>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"  />
            <p>Importer Exporter Codes (IECs)</p>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"  />
            <p>EPF UAN(s) wih Compliance History</p>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"  />
            <p>Constitution Documents (MoA, AoA)</p>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"  />
            <p>Key Management Personnel & Owners Information</p>
          </li>
          <li className="flex gap-2">
          <input type="checkbox"  />
            <p>Group Companies/LLP’s, List of Charges</p>
          </li>
          <li className="flex gap-2">
            <input type="checkbox"  />
            <p>Financial Statements</p>
          </li>
          <li className="flex gap-2">
            <a href="#" className="text-blue-500"><PlusOutlined className="pr-1"/>additional data</a>
          </li>
        </ul>
      </div>
  </div>
  )
}

export default DataAccess
