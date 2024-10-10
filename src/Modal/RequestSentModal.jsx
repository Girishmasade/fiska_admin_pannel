import { Button, Progress } from 'antd'
import Modal from 'antd/es/modal/Modal'
import React, { useState } from 'react'

const RequestSentModal = () => {
    const [isOpen, setisOpen] = useState(true)
    const handleclose = () => {
        setisOpen(false)
    }
  return (
    <>
      <Modal
      open={isOpen}
      closable={false}
      footer={
        <Button onClick={handleclose}  key="close"
        type="primary" className="bg-green-600 text-white hover:bg-green-500">close</Button>
      }
      >
        <Progress type="circle" percent={100} size={45}/>
      <div className="flex flex-col ">
        <h1 className='font-bold'>Request sent!</h1>
        <p>We have sent an invitation link to <span className='font-bold'>johndoe77@gmail.com</span></p>
      </div>
      <hr />
      </Modal>
    </>
  )
}

export default RequestSentModal
