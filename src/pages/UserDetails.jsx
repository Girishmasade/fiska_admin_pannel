
import { Drawer } from "antd";
import React, { useState } from "react";
import { CloseOutlined, LinkOutlined } from "@ant-design/icons";
import { Layout } from "antd";
const { Content } = Layout;

function UserDetails() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <Drawer
        visible={isVisible}
        closable={true}
        maskClosable={true}
        onClose={() => {
          setIsVisible(!isVisible);
        }}
        title="Deepesh Khatri and Associates"
      >
        <div className="grid grid-rows-7 w-full h-[100%] items-start text-start text-sm">
          <div className="grid grid-rows-2">
            <div className="grid grid-cols-2">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Business Type</span>
                <p>Company</p>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Business PAN</span>
                <p>ABCCE1234F</p>
              </div>
              <div className="pt-2">
                <span className="text-sm text-gray-400">Message</span>
                <p>-</p>
              </div>
            </div>
            <div className="pt-2 gap-4 flex flex-col">
              <div className="text-sm">
                <span className="text-sm text-gray-400">Sent by</span>
                <p>John Doe on 22nd Oct 23</p>
              </div>

              <div className="text-sm">
                <span className="text-sm text-gray-400">Sent to</span>
                <p>Deepesh Khatri | deepak.k@mail.com</p>
              </div>
            </div>

            <div className="pt-3">
              <div className="grid grid-cols-2 text-sm">
                <p>DATA ACCESSES</p>
                <a href="#" className="text-end text-blue-700">
                  Modify
                </a>
              </div>
              <hr />
              <div className="pt-2">
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <input
                      type="checkbox"
                      checked
                      className="relative bottom-4"
                    />
                    <p>
                      Basic KYC (Business type, Ministry Of Corporate Affairs
                      Status (MCA), GST, PAN, Udyam (MSME), Bank Account
                      Details)
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" checked />
                    <p>Importer Exporter Codes (IECs)</p>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" checked />
                    <p>EPF UAN(s) wih Compliance History</p>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" checked />
                    <p>Constitution Documents (MoA, AoA)</p>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" checked />
                    <p>Key Management Personnel & Owners Information</p>
                  </li>
                  <li className="flex gap-2 text-gray-400">
                    -<p>Group Companies/LLP’s, List of Charges</p>
                  </li>
                  <li className="flex gap-2">
                    <input type="checkbox" checked />
                    <p>Financial Statements</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-2 text-sm">
              <span className="text-sm text-gray-400">Additional data</span>
              <a href="#" className="flex gap-1 text-blue-500">
                <LinkOutlined />
                sample_doc_name.pdf
              </a>
            </div>

            <div className="grid grid-cols-2 pt-2 text-sm">
              <div>
                <h1 className="text-red-500 font-bold">Remove business</h1>
                <p className="w-52">
                  If you remove this business, they won't see any of your data.
                </p>
              </div>
              <div className="text-end relative top-4">
                <button className="border-red-500 border text-red-500 p-1 pl-2 pr-2">
                  Remove
                </button>
              </div>
            </div>
            <div className="pt-5 text-end text-sm">
            <a href="#" className="text-blue-500">
              Request connection
            </a>
          </div>
          </div>        
        </div>
      </Drawer>
    </div>
  );
}

export default UserDetails;
