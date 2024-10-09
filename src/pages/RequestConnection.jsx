import React, { useState } from "react";
import { Button, Modal, Progress, Form, Checkbox} from "antd";
import { PlusOutlined, CheckOutlined } from '@ant-design/icons';
import DataAccess from "./DataAccess";

const RequestConnection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [progress, setProgress] = useState(1); 
  const [form] = Form.useForm();
  const [step, setStep] = useState(1);

  const handleCancel = () => {
    setIsOpen(!isOpen);
    setProgress(progress); 
    form.resetFields();
    setStep(1); 
  };

  const handleNext = () => {
    form.validateFields().then((values) => {
      setProgress(100); 
      setStep(2); 
    });
  };

  const strokeColor = {
    "0%": "#808080",
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const plainOptions = ["Vendor", "Client"];

  return (
    <>
      <Modal
        title="Request Connection"
        style={{ top: 60 }}
        open={isOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            {step === 1 ? "Cancel" : "Close"}
          </Button>,
          <Button key="next" type="secondary" onClick={handleNext} className="bg-green-600 text-white hover:bg-green-500">
            {step === 1 ? "Next" : "Send Request"}
          </Button>,
        ]}
      >
        <hr />
        <div className="flex items-center pt-4 gap-2">
          <Progress
            percent={step === 1 ? 1 : 100} 
            type="circle"
            size={30}
            format={(percent) =>
              percent === 100 ? <CheckOutlined style={{ color: "green" }} /> : `${percent}%`
            }
          />

          <p className="text-sm">
           Connnection details
          </p>
          <hr className="w-10 border-1" />
          <Progress
            percent={step === 1 ? 2 : 2}
            strokeColor={strokeColor}
            type="circle"
            size={30}
            format={Number}
          />
          <p className="text-sm">
            Data Access
          </p>
        </div>

        {step === 1 ? (
          <>
            <h2 className="pt-5">REQUEST CONNECTION TO</h2>
            <hr />
            <div className="mt-4">
              <Form
                form={form}
                layout="vertical"
                className="flex gap-1 flex-wrap"
              >
                <Form.Item
                  label={<span className="text-xs">First Name</span>}
                  name="name"
                >
                  <input
                    type="text"
                    className="border w-[200px] p-1"
                    defaultValue="John"
                  />
                </Form.Item>
                <Form.Item
                  label={<span className="text-xs">Last Name</span>}
                  name="lastname"
                  className="pl-3"
                >
                  <input
                    type="text"
                    className="border w-[200px] p-1"
                    defaultValue="Doe"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-xs">Business Name</span>}
                  name="businessname"
                >
                  <input
                    type="text"
                    className="border p-1 w-[450px]"
                    defaultValue="Wonka Industries"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-xs">Business PAN</span>}
                  name="businesspan"
                >
                  <input
                    type="text"
                    className="border p-1 w-[200px]"
                    defaultValue="ABCDE1234F"
                    disabled
                  />
                </Form.Item>

                <Form.Item label="Email" name="email" className="pl-3">
                  <input
                    type="email"
                    className="border p-1 w-[200px]"
                    defaultValue="johndoe@gmail.com"
                  />
                </Form.Item>
              </Form>
            </div>

            <h2>Connection Type</h2>
            <hr />
            <div className="pt-3">
              <Checkbox.Group
                options={plainOptions}
                defaultValue={["Vendor"]}
                onChange={onChange}
                className="accent-green-500"
              />
            </div>

            <h2 className="pt-4">MESSAGE (OPTIONAL)</h2>
            <hr />
            <div className="pt-2">
              <textarea
                name="textarea"
                placeholder="Enter"
                className="w-[450px] p-2 border"
              />
            </div>
          </>
        ) : (
         <DataAccess/>          
        )}
      </Modal>
    </>
  );
};

export default RequestConnection;
