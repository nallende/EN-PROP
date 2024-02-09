import PageTitle from '@/components/page-title'
import React from 'react'
import PropertiesForm from '../../create-property/properties-form'

function EditPropertyPage() {
  return (
    <div>
      <PageTitle title="Edit Property"/>
      <PropertiesForm/>
    </div>
  )
}

export default EditPropertyPage