import React from 'react'
import { PropertiesFormStepProps } from '.'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem';
import { propertyStatuses, propertyTypes } from '@/constants';

function Basic({ currentStep,setCurrentStep, finalValues, setFinalValues,  }: PropertiesFormStepProps) {

  const onFinish = (values: any) => {
    setFinalValues({ ...finalValues, basic: values });
    setCurrentStep(currentStep +1);
  }


  return (
    <Form
      onFinish = {onFinish}
      layout="vertical"
      initialValues={finalValues.basic}>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <Form.Item name="name"
          label="PropertyName"
          rules={[

            {
              required: true,
              message: "Please input prpoperty name!",
            },

          ]}
          className='col-span-1 lg:col-span-3'
        >

          <Input placeholder="Property Name" />

        </Form.Item>
        <Form.Item
          name='description'
          label='Description'
          rules={[
            {
              required: true,
              message: "Please Input Description",

            },
          ]}
          className='col-span-1 lg:col-span-3'
        >
          <Input.TextArea rows={6} placeholder="Description" />

        </Form.Item>

        <Form.Item
          name='type'
          label='Type'
          rules={[
            {
              required: true,
              message: "Please Input Type",

            },
          ]}
           >
            <Select
            options = {propertyTypes}
            />

        </Form.Item>
        <Form.Item
          name='status'
          label='Status'
          rules={[
            {
              required: true,
              message: "Please Input Status",

            },
          ]}
           > <Select
           options = {propertyStatuses}
           />
           
           </Form.Item>

           <Form.Item
          name='price'
          label='Price'
          rules={[
            {
              required: true,
              message: "Please Input Price",

            },
          ]}
           >
            <InputNumber
            className='w-full'type="number" placeholder="Price" />
        </Form.Item>    
      </div>
      <div className='flex justify-end gap-5 mt-7'>

        <Button  disabled={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)} type="default" > Back </Button>

        <Button htmlType="submit" type="primary" > Next </Button>

      </div>


    </Form>


  )
}

export default Basic