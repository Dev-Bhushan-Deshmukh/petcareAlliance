import React, { useState } from 'react'
import { Field, Formik, useFormik ,Form} from 'formik';
export const Form_ = ({userType}) => {

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
    // ...(userType=='owner' ?ownerFields:petServiceFields)
    }

    const[iV,setIv]=useState(initialValues);
    const[currentStep,setCurrentStep]=useState(0)
  const[data,setData]=useState(initialValues)






  const handleNext=(newData)=>{
    setData(prev=>({...prev,...newData}));
    currentStep <=steps.length-1 && setCurrentStep(prev=>prev+1) 
  }
  
  const handlePrevious=(newData)=>{
    setData(prev=>({...prev,...newData}));
    setCurrentStep(prev=>prev-1)
  }













const  StepOne=(props)=>{
const handleSubmit=(values)=>{
props.next(values)
}

return (
  <Formik initialValues={props.data} onSubmit={handleSubmit}>
{
  ()=>(
    <Form>


    <p>First Name</p>
<Field name="firstName" />

<p>Last Name</p>
<Field name="lastName" />

<p>Email</p>
<Field name="email" />
<p>Password</p>
<Field name="password" />
<p>Phone </p>
<Field name="phone" />

<p>Location</p>
<Field name="location" />
<button type='submit'>{currentStep <=steps.length-1 ? 'Next':'Submit'}</button>
</Form>

  )
}

  </Formik>



)

}
const  StepTwo=(props)=>{
  const handleSubmit=(values)=>{

    
    props.next(values)
    }
    const handleprevt=(values)=>{

    
      props.previous(values)
      }
    
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
  {
    ()=>(
      <Form >
  
  
      <p>{userType!='owner' ? 'Service type':'PetName'}</p>
  <Field name={userType!=='owner' ? "serviceType":"petName"} />
  
  <p>{userType!=='owner' ? 'Years of Experience' :'PetType'}</p>
  <Field name={userType!=='owner' ? "yearsOfExperience" :"petType"} />
  
  <p>{userType!=='owner' ? "Service offered" : 'PetBreed' }</p>
  <Field name={userType!=='owner' ? "servicesOffered" :'petBreed'} />
  
  <p> {userType!=='owner' ? 'Pricing' : 'PetAge'}</p>
  <Field name={userType!=='owner' ? "pricing" : 'petAge'} />
  
  <p> {userType!=='owner' ? 'Availability' : 'PetGender'}</p>
  <Field name={userType!=='owner' ? 'availability' : 'petGender'} />

  <p>{userType!=='owner' ? 'Description' : 'MedicalHistory'}</p>
  <Field name={userType!=='owner' ? 'description' : 'medicalHistory'} />
  
  <p> {userType!=='owner' ? 'Certifications' : 'SpecialNotes'} </p>
  <Field name={userType!=='owner' ? 'Certifications' : 'specialNotes'} />
  {userType!=='owner' && <>
    <p>Portfolio</p>
    <Field name="portfolio" />
  </>} 
 
<div className='w-full pl-5 pr-5 flex justify-between' >


<button type='button' >Previous</button>
<button type='submit'>Next</button>


</div>
  </Form>
  
    )
  }
  
    </Formik>
  
  
  
  )
  
  }



// const formik=useFormik({
// initialValues:{initialValues
// },
// onSubmit:values=>{
// alert(JSON.stringify(values,null,2))

// }


// })
const steps=[ <StepOne next={handleNext } data={data} />,<StepTwo   next={handleNext } previous={handlePrevious} data={data}/>]
console.log('data-->',data);  

return (
    <div className='h-[55%] w-[90%] rounded-md border '>


   {steps[currentStep]}
    {/* <form  className=' w-full h-full flex flex-col items-center justify-start ' onSubmit={formik.handleSubmit}>Form
<label htmlFor="firstName">First Name</label>
<input
id='firstName'
name="firstName"
type="text" 
onChange={formik.handleChange}
value={formik.values.firstName}
/>








    </form> */}
    </div>
  )
}

