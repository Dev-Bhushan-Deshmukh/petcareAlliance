import React from 'react'
import { useFormik } from 'formik';
export const Form = ({userType}) => {

const ownerFields={
    petName:"",
    petType:'',
    petBreed:"",
    petAge:'',
    petGender:"",
    medicalHistory:"",
    specialNotes:""

}
const petServiceFields={
    serviceType: '',
       yearsOfExperience: '',
    servicesOffered:'',
    pricing:'',
    availability: '',
      description: '',
    certifications:'',
    portfolio: '',
  }
  const initialValues={
    profilePIcture:'',    
    firstName:'',
    lastName:'',
    email:'',
    password:"",
    phone:'',
    location:"",
    ...(userType=='owner' ?ownerFields:petServiceFields)
    }

  

const formik=useFormik({
initialValues:{initialValues
},
onSubmit:values=>{
alert(JSON.stringify(values,null,2))

}


})

  return (
    <form onSubmit={formik.handleSubmit}>Form
<label htmlFor="firstName">First Name</label>
<input
id='firstName'
name="firstName"
type="text" 
onChange={formik.handleChange}
value={formik.values.firstName}
/>








    </form>
  )
}

