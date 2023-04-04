import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/Authcontext'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await signUp(email, password)
            navigate('/')
        } catch(error) {
            alert(error.message);
        }
    }

  return (
    <>
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/327506e9-f0a6-4ae6-8115-97ea4c94268d/IN-en-20220808-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
            <div className='w-full h-screen fixed left-0 top-0 bg-black/50'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[550px] bg-black/80 text-white mx-auto'>
                    <div className='max-w-[320px] mx-auto py-5'></div>
                    <h1 className='text-3xl ml-12 mb-6 font-bold'>Sign Up</h1>
                    <form className='w-full py-4 flex flex-col'>
                        <input onChange={(e) => setEmail(e.target.value)} 
                        className='mx-12 my-1 py-3 rounded px-6 focus:outline-none bg-gray-800' type="email" placeholder='E-mail'/>
                        <input onChange={(e) => setPassword(e.target.value)}
                        className='mx-12 my-1 py-3 rounded px-6 focus:outline-none bg-gray-800' type="password" placeholder='Password' />
                        <button onClick={handleSubmit} className='bg-red-600 py-3 rounded font-bold mx-12 px-6 my-8'>Sign Up</button>
                        <div className='flex justify-between mx-12 text-gray-500 text-sm items-center font-bold'>
                            <p><input className='mr-2' type="checkbox" />Remember me</p>
                            <p>Need help ?</p>
                        </div>
                        <p className='text-center my-8 font-bold '><span className='text-gray-500 mr-2 '>Already a member ? </span>
                        <Link to='/login'><span className='hover:underline decoration-solid decoration-red-600 underline-offset-4 transition-all'>Sign In</span></Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp