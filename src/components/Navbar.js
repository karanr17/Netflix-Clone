import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/Authcontext'

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    // console.log(user.email); 

    const logoutHandler = async() => {
        try{
            await logOut()
            navigate('/')
        } catch(error) {
            alert(error.message);
        }
    }

    return (
        <div className='flex justify-between p-4 absolute w-full items-center z-[100]'>
            <Link to='/'>
                <h1 className='text-red-600 font-bold text-4xl md:text-5xl cursor-pointer'>NETFLIX</h1>
            </Link>
            {user?.email ?
                <div>
                    <Link to='/account'>
                        <button className='text-white font-semibold px-4 py-2 hover:underline decoration-solid decoration-red-600 underline-offset-4'>Account</button>
                    </Link>
                    <button onClick={logoutHandler} className='text-white font-semibold bg-red-600 px-4 py-2 rounded hover:bg-red-700'>Log Out</button>
                </div>
                :
                <div>
                    <Link to='/login'>
                        <button className='text-white font-semibold px-4 py-2 hover:underline decoration-solid decoration-red-600 underline-offset-4'>Sign In</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='text-white font-semibold bg-red-600 px-4 py-2 rounded hover:bg-red-700'>Sign Up</button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Navbar