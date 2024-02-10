'use client'
import { Steps } from 'antd';
import React from 'react'
import Basic from './basic';
import Location from './location';
import Amenities from './amenities';
import Media from './media';
import Contact from './contact';

export interface PropertiesFormStepProps  {
  currentStep : number;
  setCurrentStep : (currentStep : number) => void;
  finalValues: any;
  setFinalValues: (finalValues: any) => void;
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

  const commonPropsForSteps : any = {
    currentStep,
    setCurrentStep,
    finalValues,
    setFinalValues,
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