import React from 'react'
import { PropertiesFormStepProps } from '.'
import { Button, Upload } from 'antd'

function Media({ currentStep, setCurrentStep, finalValues, setFinalValues, }: PropertiesFormStepProps) {
  const [tempFiles, setTempFiles] = React.useState<any>([])
  const onFinish = () => {
    setFinalValues({
      ...finalValues,
      media:{
        newlyUploadedFiles: tempFiles,
        images: finalValues.media.images,
      },
    });
    setCurrentStep(currentStep + 1)
   };
  return (
    <div>
      <Upload
        listType="picture-card"
        multiple
        beforeUpload={(file: any) => {
          setTempFiles((prev: any) => [...prev, file])
          return false;
        }}
      >

        Upload Media

      </Upload>
      <div className='flex justify-end gap-5'>

        <Button disabled={currentStep === 0} type="default" onClick={() => setCurrentStep(currentStep - 1)}> Back </Button>

        <Button type="primary" onClick={() => setCurrentStep(currentStep + 1)}> Next </Button>

      </div></div>
  )
}

export default Media