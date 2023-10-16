import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
// import {toast} from 'react-hot-toast'
import toast from 'react-hot-toast';


const SignupForm = ({setIsLoggedIn}) => {

   const navigate=useNavigate();

const [formData,setFormData] =useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
});

const [showPassword,setShowPassword] = useState(false);
const [showConfirmPassword,setShowConfirmPassword] = useState(false);
const [accountType,setAccountType] = useState("student");

function changeHandler(event) {
    setFormData((prevData) => (
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ))
}

function submitHandler(event){
   event.preventDefault();
   if(formData.password !== formData.confirmPassword){
      toast.alert("passwords do not match")
      return;
   }
   setIsLoggedIn(true);
   toast.success("Account created");
   navigate("/dashboard");
}

  return (
   <div>
       <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

          <button onClick={()=>setAccountType("student")}
          className={`${accountType==="student"?
          "bg-richblack-900 text-richblack-5":
          "bg-transparent text-richblack-200"} py-2 px-5 rounded-full 
          transition-all  duration-300`}>
             Student
          </button>

          <button onClick={()=>setAccountType("instructor")}
           className={`${accountType==="instructor"?
          "bg-richblack-900 text-richblack-5":
          "bg-transparent text-richblack-200"} py-2 px-5 rounded-full 
          transition-all  duration-300`}>
             Instructor
          </button>
           
       </div>

    <form onSubmit={submitHandler}>
       {/* {firstname and lastname} */}
           <div className='flex gap-x-4 w-full mt-[10px]'>
              <label className='w-full mt-4 '>
                 <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                 First Name<sup className='text-pink-200'> *</sup></p>
                 <input
                   required
                   type="text"
                   name="firstName"
                   onChange={changeHandler}
                   placeholder="Enter First name"
                   value={formData.firstName}
                   className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                 />
              </label>
              <label className='w-full mt-4'>
                 <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                 Last Name<sup className='text-pink-200'> *</sup></p>
                 <input
                   required
                   type="text"
                   name="lastName"
                   onChange={changeHandler}
                   placeholder="Enter Last name"
                   value={formData.lastName}
                   className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                 />
              </label>
           </div>

        {/* {Email} */}
        <div className='mt-[10px]'>
           <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'> *</sup></p>
                    <input
                      required
                      type="email"
                      name="email"
                      onChange={changeHandler}
                      placeholder="Enter Email Address"
                      value={formData.email}
                      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
            </label>
        </div>
           

         {/* {create password and confirm password} */}  
         <div className='flex gap-x-4 w-full mt-[10px]'>
            <label className='relative w-full'>
               <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
               Create Password<sup className='text-pink-200'> *</sup></p>
               <input
                 required
                 type={showPassword ? ('text') : ('password')}
                 name="password"
                 onChange={changeHandler}
                 placeholder="Enter Password"
                 value={formData.password}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
               />
                <span onClick={()=>setShowPassword((prev)=>!prev)}
                className='absolute right-3 top-[38px] cursor-pointer '>
                    { showPassword ?
                     (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                     (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
            <label className='relative w-full'>
               <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
               Confirm Password<sup className='text-pink-200'> *</sup></p>
               <input
                 required
                 type={showConfirmPassword ? ('text') : ('password')}
                 name="confirmPassword"
                 onChange={changeHandler}
                 placeholder="Confirm Password"
                 value={formData.confirmPassword}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
               />
                <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}
                className='absolute right-3 top-[38px] cursor-pointer '>
                    {showConfirmPassword ?
                     (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                      (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
         </div>

         <button className='w-full mt-8 bg-yellow-50 rounded-[8px] font-medium
         text-richblack-900 px-[12px] py-[8px]'>
            Create Account
        </button>

    </form>
   </div>
  )
}

export default SignupForm;
