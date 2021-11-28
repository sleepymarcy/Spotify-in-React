import '../css/Sidebar.css'
import '../icons/index'
import { Spotify, Home, Search, Library, Liked, Create } from '../icons/index'


const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className='logo-box'>
                <a href='#'>
                    <Spotify />
                </a>
            </div>
            <a href='#'>
                <Home />
                Home
            </a>
            <a href='#'>
                <Search />
                Search
            </a>
            <a href='#'>
                <Library />
                Your Library
            </a>
            <a href='#'>
                <div className='icon'>
                    <div className='create'>
                        <Create />
                    </div>
                </div>
                Create Playlist
            </a>
            <a href='#'>
                <div className='icon'>
                    <div className='liked'>
                        <Liked />
                    </div>
                </div>
                Liked Songs
            </a>

            {/* <div className='sidebar-bot'>
                <button onClick='sign' className='sign-btn btn'>SIGN UP</button>
                <button className='log-btn btn'>LOG IN</button>
                <p className='p1'>Cookie&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;Privacy</p>
                <p className='p1'>Policy</p>
            </div> */}

        </div>


    )
}

export default Sidebar