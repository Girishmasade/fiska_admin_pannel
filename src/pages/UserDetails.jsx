import React, { useState } from "react";
import { CloseOutlined, LinkOutlined} from "@ant-design/icons";
import check from "/Images/check.svg";
function UserDetails() {
  const [isOpen, setisOpen] = useState(false);
  const closeBtn = () => {
    setisOpen(!isOpen);
  };

  return (
    <div id="layout"
      className={`${
        isOpen
          ? "hidden"
          : "relative items-end text-end m-2 p-3 min-h-screen left-[72%] w-[26rem] bg-white text-black border"
      }`}
    >
      <div className="flex justify-around">
        <button className="bg-white" onClick={closeBtn}>
          <CloseOutlined />
        </button>
        <p className="font-medium text-xl">Deepesh Khatri and Ass....</p>
        <p className="text-blue-500 bg-blue-100 border border-blue-400 pl-2 pr-2 rounded text-center items-center">Vendor</p>
      </div>
      <div className="grid grid-rows-7 pt-6 items-start text-start text-sm">
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
            <div className="pt-6">
              <span className="text-sm text-gray-400">Message</span>
              <p>-</p>
            </div>
          </div>
          <div className="pt-4 gap-4 flex flex-col">
            <div className="text-sm">
              <span className="text-sm text-gray-400">Sent by</span>
              <p>John Doe on 22nd Oct 23</p>
            </div>

            <div className="text-sm">
              <span className="text-sm text-gray-400">Sent to</span>
              <p>Deepesh Khatri | deepak.k@mail.com</p>
            </div>
          </div>

          <div className="pt-5">
            <div className="grid grid-cols-2 text-sm">
              <p>DATA ACCESSES</p>
              <a href="#" className="text-end text-blue-700">Modify</a>
            </div>
            <hr />
         <div className="pt-5">
<ul className="space-y-3 text-sm">
    <li className="flex gap-2"> 
       <input type="checkbox" checked className="relative bottom-4"/>
        <p>Basic KYC  (Business type, Ministry Of Corporate Affairs Status (MCA), GST, PAN, Udyam (MSME), Bank Account Details)</p>
    </li>
    <li className="flex gap-2">
    <input type="checkbox" checked/>
        <p>Importer Exporter Codes (IECs)</p>
    </li>
    <li className="flex gap-2">
    <input type="checkbox" checked/>
        <p>EPF UAN(s) wih Compliance History</p>
    </li>
    <li className="flex gap-2">
    <input type="checkbox" checked/>
        <p>Constitution Documents (MoA, AoA)</p>
    </li>
    <li className="flex gap-2">
    <input type="checkbox" checked/>
        <p>Key Management Personnel & Owners Information</p>
    </li>
    <li className="flex gap-2 text-gray-400">
        -
        <p>Group Companies/LLP’s, List of Charges</p>
    </li>
    <li className="flex gap-2">
    <input type="checkbox" checked/>
        <p>Financial Statements</p>
    </li>
</ul>
         </div>

         
          </div>
          <div className="pt-4 text-sm">
        <span className="text-sm text-gray-400">Additional data</span>
        <a href="#" className="flex gap-1 text-blue-500"><LinkOutlined />sample_doc_name.pdf</a>
          </div>

          <div className="grid grid-cols-2 pt-5 text-sm">
            <div>
                <h1 className="text-red-500 font-bold">Remove business</h1>
                <p className="w-72">If you remove this business, they won't see any of your data.</p>
            </div>
            <div className="text-end relative top-4"><button className="border-red-500 border text-red-500 p-1 pl-2 pr-2">Remove</button></div>
          </div>
        </div>

        <div className="pt-8 text-end text-sm">
            <a href="#" className="text-blue-500">Request connection</a>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
