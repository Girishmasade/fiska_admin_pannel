import React, { useEffect, useState } from "react";
import { Button, Modal, Progress, Form, Checkbox, notification } from "antd";
import {CheckOutlined } from "@ant-design/icons";
import DataAccess from "./DataAccess";
import RequestSentModal from "../Modal/RequestSentModal";
import RequestConnectionModal from "../Modal/RequestConnectionModal";
import { Link } from "react-router-dom";

const RequestConnection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [progress, setProgress] = useState(1);
  const [form] = Form.useForm();
  const [step, setStep] = useState(1);

  const handleCancel = () => {
    setIsOpen(false);
    setProgress(progress);
    form.resetFields();
    setStep(1);
  };

  const handleNext = () => {
    form.validateFields().then(() => {
      setProgress(100);
      setStep(2);
    });
  };

  const strokeColor = {
    "0%": "#808080",
  };


  return (
    <>
      <Modal
        title="Request Connection"
        style={{ top: 60 }}
        open={isOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            {step === 1 || step === 2 ? "Cancel" : "Close"}
          </Button>,
          step === 1 && (
            <Button
              key="next"
              type="secondary"
              onClick={handleNext}
              className="bg-green-600 text-white hover:bg-green-500"
            >
              Next
            </Button>
          ),
          step === 2 && (
            <Button
              key="send"
              type="primary"
              className="bg-green-600 text-white hover:bg-green-500"
            >
              <Link to='</RequestSentModal>' >Send Request</Link>
            </Button>
          ),
        ]}
      >
        <hr />
        <div className="flex items-center pt-4 gap-2">
          <Progress
            percent={step === 1 ? 1 : 100}
            type="circle"
            size={30}
            format={(percent) =>
              percent === 100 ? (
                <CheckOutlined style={{ color: "green" }} />
              ) : (
                `${percent}%`
              )
            }
          />

          <p className="text-sm">Connnection details</p>
          <hr className="w-10 border-1" />
          <Progress
            percent={step === 1 ? 2 : 2}
            strokeColor={strokeColor}
            type="circle"
            size={30}
            format={Number}
          />
          <p className="text-sm">Data Access</p>
        </div>

        {step === 1 ? (
          <>
            <RequestConnectionModal />
          </>
        ) : (
          <DataAccess />
        )}

      </Modal>
    </>
  );
};

export default RequestConnection;
