import React, { useEffect, useState } from "react";
import { Field, Formik, useFormik, Form } from "formik";
import * as Yup from 'yup';
export const Form_ = ({ userType }) => {
  const ownerFields = {
    petName: "",
    petType: "",
    petBreed: "",
    petAge: "",
    petGender: "",
    medicalHistory: "",
    specialNotes: "",
  };
  const petServiceFields = {
    serviceType: "",
    yearsOfExperience: "",
    servicesOffered: "",
    pricing: "",
    availability: "",
    description: "",
    certifications: "",
    portfolio: "",
  };
  const initialValues = {
    profilePIcture: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    // ...(userType=='owner' ?ownerFields:petServiceFields)
  };
  const formOneValidationSchema =Yup.object().shape({
    // profilePIcture:Yup.string().required('required'),
    firstName:Yup.string().min(2,'too short').required('required'),
    lastName: Yup.string().min(3,'too short').required('required'),
    email:Yup.string().email('Invalid email').required('required'),
    password: Yup.string().min(10,'too short').required('required'),
    phone: Yup.string().required('required'),
    location: Yup.string().required('required'),
    // ...(userType=='owner' ?ownerFields:petServiceFields)
  });

  const [iV, setIv] = useState(initialValues);
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

  const StepOne = (props) => {
    const handleSubmit = (values) => {
      props.next(values);
    };

    return (
      <Formik validationSchema={formOneValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form>
            <p>First Name</p>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
            <p>Last Name</p>
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
            <p>Email</p>
            <Field name="email" />
            {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
            <p>Password</p>
            <Field name="password" type='password'/>
            {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
            <p>Phone </p>
            <Field name="phone" />
            {errors.phone && touched.phone ? (
             <div>{errors.phone}</div>
           ) : null}
            <p>Location</p>
            <Field name="location" />
            {errors.location && touched.location ? (
             <div>{errors.location}</div>
           ) : null}
            <button type="submit">
              {currentStep <= steps.length - 1 ? "Next" : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    );
  };
  const StepTwo = (props) => {
    const handleSubmit = (values) => {
      console.log('step-two-data',values);
      props.next(values);
    };
    const handleprev = (values) => {
      props.previous(values);
    };

    return (
      <Formik initialValues={props.data} onSubmit={handleSubmit}>
        {(formProps) => (
          <Form>
            <p>{userType != "owner" ? "Service type" : "PetName"}</p>
            <Field name={userType !== "owner" ? "serviceType" : "petName"} />

            <p>{userType !== "owner" ? "Years of Experience" : "PetType"}</p>
            <Field
              name={userType !== "owner" ? "yearsOfExperience" : "petType"}
            />

            <p>{userType !== "owner" ? "Service offered" : "PetBreed"}</p>
            <Field
              name={userType !== "owner" ? "servicesOffered" : "petBreed"}
            />

            <p> {userType !== "owner" ? "Pricing" : "PetAge"}</p>
            <Field name={userType !== "owner" ? "pricing" : "petAge"} />

            <p> {userType !== "owner" ? "Availability" : "PetGender"}</p>
            <Field name={userType !== "owner" ? "availability" : "petGender"} />

            <p>{userType !== "owner" ? "Description" : "MedicalHistory"}</p>
            <Field
              name={userType !== "owner" ? "description" : "medicalHistory"}
            />

            <p> {userType !== "owner" ? "Certifications" : "SpecialNotes"} </p>
            <Field
              name={userType !== "owner" ? "Certifications" : "specialNotes"}
            />
            {userType !== "owner" && (
              <>
                <p>Portfolio</p>
                <Field name="portfolio" />
              </>
            )}

            <div className="w-full pl-5 pr-5 flex justify-between">
              <button type="button" onClick={()=>props.previous(formProps.values)}>Previous</button>
              <button type="submit">Next</button>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

const StepThree=(props)=>{
  console.log('form three data',props.data)
  const[userData,setUserData]=useState([]);
  const arr=[];
  useEffect(()=>{
    for(const[key_,val_] of Object.entries(props.data)){
      let staggedData={field:'',value:''}
      staggedData.field=key_;
      staggedData.value=val_;
      
      arr.push(staggedData);
        }
        setUserData(arr);
        // console.log(arr)
  },[props.data])
 
 console.log(arr,userData)


return<>
{
userData &&
userData?.map((item)=><div>{item.field}</div>)

}

</>




}









  const steps = [
    <StepOne next={handleNext} data={data} />,
    <StepTwo next={handleNext} previous={handlePrevious} data={data} />,
    <StepThree previous={handlePrevious} data={data} />
  ];
  // console.log("data-->", data);

  return (
    <div className="h-[55%] w-[90%] rounded-md border ">
      {steps[currentStep]}
    </div>
  );
};


