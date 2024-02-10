import React from 'react'
import { PropertiesFormStepProps } from '.';
import { Button, Form, Input, InputNumber, Select } from 'antd'

function Contact({currentStep, setCurrentStep, finalValues, setFinalValues} :  PropertiesFormStepProps ) {
  const onFinish = (values:any)=>{
  const tempFinalValues = {...finalValues, contact: values};
  console.log(tempFinalValues);
  };
  //ownername owneremail ownerphone owneraddress, show ownerContact
  return (
    <Form
    onFinish={onFinish}
    layout='vertical'
    initialValues={finalValues.contact}
    >
       <div className='grid grid-cols-1 lg:grid-cols-3'>
       </div>

        <div className='flex justify-end gap-5'>


    <Button disabled = { currentStep === 0 } type="default"  onClick={()=> setCurrentStep(currentStep -1)}> Back </Button>

    <Button type="primary"
      htmlType="submit"
    > Next </Button>
    </div>
   </Form>
  )
}

export default Contact