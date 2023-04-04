import React from 'react'
import SavedMovies from '../components/SavedMovies'

const Account = () => {
  return (
    <div>
      <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/327506e9-f0a6-4ae6-8115-97ea4c94268d/IN-en-20220808-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
      <div className='w-full h-[400px] bg-gradient-to-r from-black fixed top-0 left-0'></div>
      <div className='absolute top-[40%] p-14 md:p-10'>
        <h1 className='font-bold text-3xl md:text-4xl text-white'>Watchlist</h1>
      </div>
      <SavedMovies />
    </div>
  )
}

export default Account