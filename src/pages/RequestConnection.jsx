import React, { useState } from "react";
import { Button, Modal, Progress, Form, Checkbox } from "antd";

const RequestConnection = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [progress, setprogress] = useState(1);
  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsOpen(!isOpen)
    setprogress(progress);
    form.resetFields();
  };

  const handleNext = () => {
    form.validateFields().then((values) => {
      setprogress(100);
      console.log("Form Data: ", values);
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
        style={{
          top: 60,
        }}
        open={isOpen}
        onCancel={handleCancel}
        onClose={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="next"
            type="primary"
            onClick={handleNext}
            disabled={progress === 100}
          >
            Next
          </Button>,
        ]}
      >
        <hr />
        <div className="flex items-center pt-4 gap-2">
          <Progress
            percent={progress}
            type="circle"
            size={30}
            format={Number}
            values='50'
          />
          <p className="text-sm">Connection details</p>
          <hr className="w-10 border-1" />
          <Progress
            percent={2}
            strokeColor={strokeColor}
            type="circle"
            size={30}
            format={Number}
          />
          <p className="text-sm text-gray-500">Data access</p>
        </div>

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

            <Form.Item
              label="Email"
              name={<span className="text-xs">Email</span>}
              className="pl-3"
            >
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
        <textarea name="textarea" placeholder="Enter" className="w-[450px] p-2 border"/>
       </div>
      </Modal>
    </>
  );
};
export default RequestConnection;
