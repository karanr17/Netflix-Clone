import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { UserAuth } from '../context/Authcontext';
import { db } from '../firebase';
// import { async } from '@firebase/util';

const Movies = ( {item} ) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();

    const movieId = doc(db, "users", `${user?.email}`)

    const saveMovie = async ({ item }) => {
        if(user?.email) {
            setLike(!like);
            setSaved(true);
            await updateDoc(movieId, {
                savedMovies: arrayUnion({
                    id: item.id,
                    title: item.title ? item.title : item.name,
                    img: item.backdrop_path
                }) 
            })
        } else {
            alert('Please Login to save movies !!')
        }
    }

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-4'>
            <img className='w-full h-auto block
                ' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {item.title ? item?.title : item.name}
                </p>
                <p onClick={saveMovie}>
                    {like ? <FaHeart className='absolute top-5 left-5 text-gray-300' />
                        : 
                            <FaRegHeart className='absolute top-5 left-5 text-gray-300' />
                    }
                </p>
            </div>
        </div>
    )
}

export default Movies;