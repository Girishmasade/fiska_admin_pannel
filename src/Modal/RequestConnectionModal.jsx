import React from 'react'
import { Form, Checkbox } from 'antd';

function RequestConnectionModal() {
    const onChange = (checkedValues) => {
        console.log("checked = ", checkedValues);
      };
      const plainOptions = ["Vendor", "Client"];

const [form] = Form.useForm();

  return (
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
  )
}

export default RequestConnectionModal
