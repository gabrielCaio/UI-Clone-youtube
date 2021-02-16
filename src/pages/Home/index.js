import './style.css'
import { FiMenu, FiSearch, FiBell, FiVideo, FiGrid, FiUser, FiHome, FiRadio, FiYoutube, FiBook } from 'react-icons/fi'
import Image from '../../utils/thumb.jpg'

function Home() {

    const element = [1, 2, 3, 4, 5, 6, 7, 8]

    const videoCLicked = (index) => {
        alert(`Video ${index} clicked!`)
    }

    return (
        <div className="wrapper">
            <div className="header" >
                <div id="start" >
                    <FiMenu size={22} style={{color: '#fff'}} />
                    <a onClick={() => alert("Home")} >YoutubeClone</a>
                </div>

                <div className="searchComponent" >
                    <input className="searchbar" type="text" placeholder="Search" ></input>
                    <button id="searchButton" onClick={() => alert("Search")} >
                        <FiSearch size={14} style={{color: '#7a7a7a'}} />
                    </button>
                </div>

                <div className="end">
                    <a className='endButton' onClick={() => alert("Create")} >
                        <FiVideo size={22} style={{color: '#fff'}} />
                    </a>
                    <a className='endButton' onClick={() => alert("Apps")} >
                        <FiGrid size={22} style={{color: '#fff'}} />
                    </a>
                    <a className='endButton' onClick={() => alert("Notifications")} >  
                        <FiBell size={22} style={{color: '#fff'}} />
                    </a>
                    <a className='endButton' onClick={() => alert("Profile")} >
                        <FiUser size={22} style={{color: '#fff', marginLeft: 10}} />
                    </a>
                </div>
            </div>

            <div className="content" >
                <div className="sidebar">
                    <a className="item" onClick={() => alert("Home")} >
                        <FiHome size={22} style={{color: '#fff'}} />
                        <p>Home</p>
                    </a>
                    <a className="item" onClick={() => alert("Trending")} >
                        <FiRadio size={22} style={{color: '#fff'}} />
                        <p>Trending</p>
                    </a>
                    <a className="item" onClick={() => alert("Subscriptions")} >
                        <FiYoutube size={22} style={{color: '#fff'}} />
                        <p>Subscriptions</p>
                    </a>
                    <a className="item" onClick={() => alert("Library")} >
                        <FiBook size={22} style={{color: '#fff'}} />
                        <p>library</p>
                    </a>
                </div>
                
                <div className="page" >
                    {element.map((item, index) => {
                        return (
                            <a onClick={() => videoCLicked(index)} classname="videoItem" >
                                <img src={Image} className="video" />

                                <div className="description" >
                                    <div className="avatar" >
                                        <FiUser size={22} color="#fff" />
                                    </div>
                                    <div className="text" >
                                        <h1>Test Video {index}</h1>
                                        <h2>User {index}</h2>
                                        <h3>37 mil views • 3 days ago</h3>
                                    </div>
                                </div>
                            </a>
                        )
                    })

                    }
                </div>
            </div>
        </div>
    )
}

export default Home