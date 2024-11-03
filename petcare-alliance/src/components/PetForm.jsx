import { Form, Formik,Field } from 'formik'
import React, { useState } from 'react'

export const PetForm = () => {


  const initialValues={

    name:'',
    species:'',
    breed:'',
    gender:'',
    age:'',
    'color-marking':''
  }
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState(initialValues);
  const handleNext = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));

     currentStep <= steps.length - 1 && setCurrentStep((prev) => prev + 1);
   };

   const handlePrevious = (newData) => {

    // console.log(newData,'new data in prev event')
    
        setData((prev) => ({ ...prev, ...newData }));
        setCurrentStep((prev) => prev - 1);
      };









 
const StepOne=(props)=>{
  const handleSubmit=(values)=>{
    console.log('--',values);
    props.next(values);
    
  };
    return(
<Formik onSubmit={handleSubmit} initialValues={initialValues} >
  {()=>(
<Form>
<p>Name</p>
<Field name="firstName" />
<p>Species</p>
<Field name='species'/>
<p>Breed</p>
<Field name="breed" />
<p>Gender</p>
<Field as="select" name="gender">
             <option value="male">Male</option>
             <option value="female">Female</option>
            
           </Field>
<p>Age</p>
<Field name='age' />
<p>color-Markings</p>
<Field name="color-marking" />


<button type="submit">
              {currentStep <= steps.length - 1 ? "Next" : "Submit"}
            </button>



</Form>



  )}
</Formik>

        
    )

}
const StepTwo=(props)=>{
  const handleSubmit=(values)=>{
    console.log('--',values);
  props.next(values)
  }
    return(
<Formik onSubmit={handleSubmit}  initialValues={props.data}>
  {()=>(
<Form>
<p>  Medical Conditions</p>
<Field name="Medical-condition" />
<p>Medications</p>
<Field name="Medications" />
<p>Allergies</p>
<Field name="Allergies" />
<p>Veterinarian Contact</p>
<Field name="Veterinarian-Contact" />



<button type="submit">
              {currentStep <= steps.length - 1 ? "Next" : "Submit"}
            </button>



</Form>



  )}
</Formik>


    )
}
const StepThree=(props)=>{
  const handleSubmit=(values)=>{
    console.log('--',values);
props.next(values)
  }
    return(
<Formik onSubmit={handleSubmit} initialValues={props.data}>
      {()=>(
    <Form>
    <p> Dietary Restrictions/Preferences</p>
    <Field name="Dietary-Restrictions" />
    <p>Feeding Schedule</p>
    <Field name="Feeding-Schedule" />
    <p>Favorite Foods/Treats</p>
   
  <Field name="Favorite-Foods"/>
    <p>Grooming Needs</p>
    <Field name="Grooming" />
    
    
    
    
    <button type="submit">
              {currentStep <= steps.length - 1 ? "Next" : "Submit"}
            </button>   
    
    
    </Form>
    
    
    
      )}
    </Formik>
    
    
        )
}

const StepFour=(props)=>{
  const handleSubmit=(values)=>{
    console.log('--',values);
    props.next(values)
  }
    return(
<Formik onSubmit={handleSubmit} initialValues={props.data}>
    {()=>(
  <Form>
  <p>   Temperament</p>
<Field name="Temperament"  />
  <p>Socialization </p>
 <Field name="Socialization" />
  <p> Training Level</p>
<Field name="Training-Level" /> 
  <p>Special Habits/Quirks</p>
  <Field name='Special-Habits' />
  
  
  <button type="submit">
              {currentStep <= steps.length - 1 ? "Next" : "Submit"}
            </button>
  
  
  
  
  </Form>
  
  
  
    )}
  </Formik>

  )
    
}
const StepFive=(props)=>{
  const handleSubmit=(values)=>{
    console.log('--',values);
   props.next(values)
  }
    return(
<Formik onSubmit={handleSubmit} initialValues={props.data}>
      {()=>(
    <Form>
    <p> Emergency Contact</p>
    <Field name="Emergency-Contact" />
    <p> Preferred Emergency Clinic</p>
    <Field name="Preferred-Emergency-Clinic" />
    <p> Behavior in Emergencies</p>
    <Field name="Behavior-in-Emergencies" />
  
    
    
    
    
    <button type="submit">
              {currentStep <= steps.length - 1 ? "Next" : "Submit"}
            </button>
    
    
    </Form>
    
    
    
      )}
    </Formik>
    
    
        )
    
}
const StepSix=(props)=>{
  const handleSubmit=(values)=>{
    console.log('--',values);
   props.next(values)
  }
    return(
<Formik onSubmit={handleSubmit} initialValues={props.data}>
      {()=>(
    <Form>
    <p> Owner's Notes</p>
   
    <Field name="Owner-Notes" />
    <p> Special Accommodations</p>
 <Field name="Special Accommodations" />
  
    <button type="submit">
              {currentStep <= steps.length - 1 ? "Next" : "Submit"}
            </button>
    
    
    
    
    
    
    </Form>
    
    
    
      )}
    </Formik>
    
    
        )
    
}
const StepSeven=(props)=>{
  const handleSubmit=(values)=>{
    console.log('--',values);
console.log(data)
  }
    return(
<Formik onSubmit={handleSubmit} initialValues={props.data}>
      {()=>(
    <Form>
    <p> Upload Photos</p>
    <Field as="file" name="Upload-Photos" accept="image/*" multiple />
    <p>  Upload Documents e.g., Health records, insurance</p>
  
    <Field as="file" name="Upload-Documents" accept=".pdf,.doc,.jpg,.png" multiple />
  
    
    
    <button type="submit">
              {currentStep <= steps.length - 1 ? "Submit" : "Next"}
            </button>{currentStep}
    
    
    
    
    </Form>
    
    
    
      )}
    </Formik>
    
    
        )
    
}



const steps=[<StepOne next={handleNext} data={data} />,<StepTwo  next={handleNext} previous={handlePrevious} data={data}/>,<StepThree next={handleNext} previous={handlePrevious} data={data}/>,<StepFour next={handleNext} previous={handlePrevious} data={data}/>,<StepFive next={handleNext} previous={handlePrevious} data={data}/>,<StepSix next={handleNext} previous={handlePrevious} data={data}/>,<StepSeven  previous={handlePrevious} data={data}/>];

  return (
    <div className='h-full w-full bg-slate-300'>
{currentStep}

{steps[currentStep]}


    </div>
  )
}
