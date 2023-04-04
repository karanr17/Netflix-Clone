import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movies from './Movies';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchURL, rowId }) => {
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovie(response.data.results)
    })
  }, [fetchURL])
  // console.log(movie);
  
  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} size={30} className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movie.map((item, id) => {
            return(
              <Movies key={id} item={item}/>
            )
          })}
        </div>
        <MdChevronRight onClick={slideRight} size={30} className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
      </div>
    </>
  )
}

export default Row