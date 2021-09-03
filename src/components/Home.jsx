import '../css/Home.css'
import Album from './Album'
import Heading from './Heading'

import { fetchMusic } from '../fetch'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Home = () => {

    // Selected music in rows
    const [travis, setTravis] = useState([])
    const [cudi, setCudi] = useState([])
    const [ mac, setMac] = useState([])

    useEffect(() => {
        fetchMusic('travis scott').then((res) => setTravis(res))
        
        fetchMusic('kid cudi').then((res) => setCudi(res))
        
        fetchMusic('mac miller').then((res) => setMac(res))
    }, [])

    return (
        <div className='home'>
            <Heading />
            <h2>Cactus Jack</h2>
            <div className='break'>
            {travis && travis.slice(0,6).map((t)=> <Link to={"album/" + t.album.id}> <Album src={t.album.cover_medium} key={t.id}/> </Link> )}
            </div>
            
            <h2>Cudder</h2>
            <div className='break'>
            {cudi && cudi.slice(0,6).map((t)=> <Link to={"album/" + t.album.id}> <Album src={t.album.cover_medium} key={t.id}/> </Link> )}
            </div>
            
            <h2>Mac Miller</h2>
            <div className='break'>
            {mac && mac.slice(0,6).map((t)=> <Link to={"album/" + t.album.id}> <Album src={t.album.cover_medium} key={t.id}/> </Link> )}
            </div>
        </div>
        )
} 

export default Home