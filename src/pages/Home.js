import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowId='1' title='Upcoming' fetchURL={requests.requestUpcoming}/>
        <Row rowId='2' title='Now Playing' fetchURL={requests.requestNowPlaying}/>
        <Row rowId='3' title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row rowId='4' title='Latest TV Shows' fetchURL={requests.requestLatestTv}/>
        <Row rowId='5' title='Popular TV Shows' fetchURL={requests.requestPopularTv}/>
    </div>
  )
}

export default Home