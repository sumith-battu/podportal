import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios';

function Signup() {

   const {register, handleSubmit, formState: {errors}} = useForm()
   const onFormSubmit = (data) => {
      axios.post('http://localhost:4000/user-api/create-user', data)
      .then(response => {
         console.log(response)
         alert("User created successfully")})
      .catch(error => alert("Error in creating user"))
   }
   return (
      <div className='container border shadow-lg rounded'>
         <div className='signup-container'>
            <div className='info-container container border shadow-lg rounded mt-3 p-3'>
               <form onSubmit={handleSubmit(onFormSubmit)}>
                  <div className='mb-3'>
                     <label for='name' className='form-label pt-2'>
                        What should we call you?
                     </label>
                     <input
                        type='text'
                        className='form-control w-75'
                        id='name'
                        placeholder='Enter your name:'
                        {...register("name",{required:true,minLength:3})}
                     />
                     {errors.name?.type == 'required' && <span className='text-danger'>*Username is required</span>}
                     {errors.name?.type == 'minLength' && <span className='text-danger'>*Username must be atleast 3 characters</span>}
                  </div>
                  <div className='mb-3'>
                     <label for='email' className='form-label'>
                        Email
                     </label>
                     <input
                        type='email'
                        className='form-control w-75'
                        id='email'
                        placeholder='Enter your Email:'
                        {...register("email",
                        {required:true})}
                     />
                     {errors.name?.type == 'required' && <span className='text-danger'>*Email is mandatory</span>}
                  </div>
                  <div className='mb-3'>
                     <label for='password' className='form-label'>
                        Create a password
                     </label>
                     <input
                        type='password'
                        className='form-control w-75'
                        id='password'
                        placeholder='Enter your password: '
                        {...register("password",
                        {required:true,minLength:8})}
                     />
                     {errors.name?.type == 'minLength' && <span className='text-danger'>*Password must be atleast 8 characters</span>}
                  </div>
                  <div className='mb-3'>
                     <label for='DOB' className='form-label'>
                        Date Of Birth:
                     </label>
                     <input
                        type='date'
                        className='form-control w-25'
                        id='date'
                        placeholder='SELECT: '
                        {...register("DOB",
                        {required:true})}
                     />
                     {errors.name?.type == 'required' && <span className='text-danger'>*DOB is mandatory</span>}
                  </div>
                  <div className='mb-3'>
                     <label for='gender' className='form-label'>
                        What's your gender?
                     </label>
                     <select {...register("gender")}>
                        <option value=''>Please select one…</option>
                        <option value='female'>Female</option>
                        <option value='male'>Male</option>
                        <option value='non-binary'>Non-Binary</option>
                        <option value='other'>Other</option>
                        <option value='Prefer not to answer'>
                           Perfer not to Answer
                        </option>
                     </select>
                  </div>
                  <div className='pb-3'>
                     <button type='submit' className='btn btn-primary pb-3'>
                        Submit
                     </button>
                  </div>
               </form>
            </div>
            <div className='image-container mt-3 p-3'>
               <img
                  className='w-100'
                  src='data:image/png;base64,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'
               />
            </div>
         </div>
         <p>Already have an account? <Link to='/login'>
                        Click here
         </Link></p>
         
   
      </div>
   )
}

export default Signup
