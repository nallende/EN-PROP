import React from 'react'
import { PropertiesFormStepProps } from '.';
import { Button, Form, Input, InputNumber, Select, message,  } from 'antd'
import FormItem from 'antd/es/form/FormItem';
import { AddProperty } from '@/actions/properties';
import {useRouter} from 'next/navigation';
import { UploadFilesToFirebaseAndReturnUrls } from '@/helpers/upload-media';

function Contact({currentStep, setCurrentStep, finalValues, loading} 
  :  PropertiesFormStepProps ) {
  const router = useRouter();
  const onFinish = async (values:any)=>{
    try {
     
      const tempFinalValues = {...finalValues, contact: values};
      const tempMedia = tempFinalValues.media;
      console.log('tempMedia', tempMedia);
      console.log('tempFinalValues', tempFinalValues);
      tempMedia.images = await UploadFilesToFirebaseAndReturnUrls(tempMedia.newlyUploadedFiles);

      tempFinalValues.media = tempMedia;

      const valuesAsPerDb = {
        ...tempFinalValues.basic,
        ...tempFinalValues.location,
        ...tempFinalValues.details,
        ...tempFinalValues.contact,
        images: tempFinalValues.media,
      }

      // Add the missing import for AddProperty
     

      await AddProperty(valuesAsPerDb);
      message.success('Property added successfully');
      router.push('/user/properties');


    } catch (error:any) {
      message.error(error.message);
      
    } finally {
     
    } 

 
 
  };
  //ownername owneremail ownerphone owneraddress, show ownerContact 
  return (
    <Form
    onFinish={onFinish}
    layout='vertical'
    initialValues={finalValues.contact}
    >
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <Form.Item
        name={'ownerName'}
        label="Owner Name"
        rules={[{required: true, message: 'Please input the owner name'}]}
        ><Input placeholder='Owner Name' /></Form.Item>

        <Form.Item
        name={'ownerEmail'}
        label="Owner Email"
        rules={[{required: true, message: 'Please input the owner email'}]}
        ><Input placeholder='Owner Email' /></Form.Item>
        
        <Form.Item
        name={'ownerPhone'}
        label="Owner Phone"
        rules={[{required: true, message: 'Please input the owner phone'}]}
        ><Input placeholder='Owner Phone' /></Form.Item>
        
        <Form.Item
        name={'showOwnerContact'}
        label="Show Owner Contact"
        rules={[{required: true, message: 'Please input the show owner contact'}]}
        >
        <Select options = {[
          {label: 'Yes', value: 'true'},
          {label: 'No', value: 'false'}
        ]} /></Form.Item>


       </div>

        <div className='flex justify-end gap-5 mt-7'>


    <Button disabled = { currentStep === 0 } type="default"  onClick={()=> setCurrentStep(currentStep -1)}> Back </Button>

    <Button type="primary"
      htmlType="submit"
      loading={loading}
    > Save & Submit Property </Button>
    </div>
   </Form>
  )
}

export default Contact

function UplooadFilesToFirebaseAndReturnURLs(tempMedia: any): any {
  throw new Error('Function not implemented.');
}
