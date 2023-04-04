import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../Requests';
import saveMovie from './Movies'
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    const truncateString = (str, num) => {
        if(str?.length > num){
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }
    
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
 
    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full group'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                {/* <BsChevronLeft size={30} className='text-gray-100 rounded-full left-0 top-[55%] md:top-[275px] absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/> */}
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                {/* <BsChevronRight onClick={nextMovie} size={30} className='rounded-full right-0 top-[55%] md:top-[275px] absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/> */}
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='font-bold text-3xl md:text-5xl flex-wrap'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className='border font-semibold bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                        <button className='border font-semibold text-white ml-4 border-gray-300 py-2 px-5'>Watch Later</button>
                        <p className='text-gray-400 text-sm mt-4'>Released: {movie?.release_date}</p>
                        <p className='font-medium w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white mt-2'>{truncateString(movie?.overview, 180)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main