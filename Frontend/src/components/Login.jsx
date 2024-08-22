import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Login() {
  const { 
    handleSubmit,
    register,
    formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
   <>
    <div>

    <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">_Login</h3>
        <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input type="email"
             placeholder='Enter your email'
            className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("email", {
                required:true
              })}/>
              <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input type="text" 
            placeholder='Enter your password' 
            className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("password", {
                required:true
              })}/>
              <br />
            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='flex justify-around mt-4'>
            <button className="btn btn-error">_login</button>
            <p className='mt-4'>
                Not Registered?{" "}
                <Link 
                    to='/signup'
                    className='underline text-blue-500 cursor-pointer'>
                    Signup
                </Link>{" "}
            </p>
        </div>
    </div>
</dialog>
    </div>
   </>
  )
}

export default Login
