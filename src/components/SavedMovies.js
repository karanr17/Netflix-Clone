import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/Authcontext'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { AiOutlineClose } from 'react-icons/ai'
import { async } from '@firebase/util'

const SavedMovies = () => {
	const [movie, setMovie] = useState([]);
	const { user } = UserAuth();
	const docRef = doc(db, "users", `${user?.email}`);

	useEffect(() => {
		onSnapshot(docRef, (doc) => {
			setMovie(doc.data()?.savedMovies)
		})
	}, [user?.email]);
	// console.log(movie);

	const deleteMovie = async (passedId) => {
		try {
			const res = movie.filter((item) => item.id !== passedId);
			await updateDoc(docRef, {
				savedMovies: res
			})
		} catch (err) {
			console.log(err.message);
		}
	}

	const slideLeft = () => {
		var slider = document.getElementById('slider')
		slider.scrollLeft = slider.scrollLeft - 500;
	}

	const slideRight = () => {
		var slider = document.getElementById('slider')
		slider.scrollLeft = slider.scrollLeft + 500;
	}

	return (
		<div>
			<h2 className='text-white font-bold md:text-xl p-4 mt-3'>My Shows</h2>
			<div className='relative flex items-center group'>
				<MdChevronLeft onClick={slideLeft} size={30}
					className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
				<div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
					{movie.length !== 0 && movie.map((item, id) => {
						return (
							<div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-4'>
								<img className='w-full h-auto block'
									src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
								<div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
									<p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
										{item.title ? item?.title : item.name}
									</p>
									<p onClick={() => deleteMovie(item.id)} className='absolute text-gray-300 top-5 right-5'><AiOutlineClose /></p>
								</div>
							</div>
						)
					})}
				</div>
				<MdChevronRight onClick={slideRight} size={30}
					className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
			</div>
		</div>
	)
}

export default SavedMovies