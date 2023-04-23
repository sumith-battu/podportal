import React from 'react'

function Login() {
   return (
      <div>
         <h1>Login</h1>
         <div className='container border shadow-lg rounded'>
            <form>
               <div className='mb-3'>
                  <label for='exampleInputEmail1' className='form-label pt-2'>
                     Email address
                  </label>
                  <input
                     type='email'
                     className='form-control w-25'
                     id='exampleInputEmail1'
                     aria-describedby='emailHelp'
                  />
                  <div id='emailHelp' className='form-text'>
                     We'll never share your email with anyone else.
                  </div>
               </div>
               <div className='mb-3'>
                  <label for='exampleInputPassword1' className='form-label'>
                     Password
                  </label>
                  <input
                     type='password'
                     className='form-control w-25'
                     id='exampleInputPassword1'
                  />
               </div>
               <div className='pb-3'>
                  <button type='submit' className='btn btn-primary pb-3'>
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Login