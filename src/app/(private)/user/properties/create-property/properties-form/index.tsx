'use client'
import { Steps } from 'antd';
import React, { useEffect } from 'react'
import Basic from './basic';
import Location from './location';
import Amenities from './amenities';
import Media from './media';
import Contact from './contact';
import { useRouter } from 'next/navigation';

export interface PropertiesFormStepProps  {
  currentStep : number;
  setCurrentStep : (currentStep : number) => void;
  finalValues: any;
  setFinalValues: (finalValues: any) => void;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
}

function PropertiesForm() {
  const [finalValues, setFinalValues] = React.useState({
    basic:{},
    location:{},
    amenities : {},
    media :{
      newlyUploadedFiles : [],
      images : [],
    },
    contact : {},
  });

  const [currentStep = 0, setCurrentStep] = React.useState(0);

  const [loading = false, setLoading] = React.useState(false);
  


  const commonPropsForSteps : any = {
    currentStep,
    setCurrentStep,
    finalValues,
    setFinalValues,
    loading,
    setLoading,
  };

  const steps =[
    {
      title: 'Basic',
      content: <Basic {...commonPropsForSteps} />
    },
    {
      title: 'Location',
      content:<Location {...commonPropsForSteps}  />
    },
    {
      title: 'Amenities',
      content: <Amenities {...commonPropsForSteps} />
    },
    {
      title: 'Media',
      content: <Media {...commonPropsForSteps} />
    },
    {
      title: 'Contact',
      content: <Contact {...commonPropsForSteps} />
    },
  ];

  useEffect(() => {
    console.log('finalValues', finalValues)},
    [finalValues]);

 

  return (
    <div>
      <Steps
      current={currentStep}
      items={steps}
      />

    <div className='mt-8'>{steps[currentStep].content}</div>

    </div>
  )
}

export default PropertiesForm