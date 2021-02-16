import './style.css'
import { FiMenu, FiSearch, FiBell, FiVideo, FiGrid, FiMic, FiUser, FiHome, FiRadio, FiYoutube, FiBook } from 'react-icons/fi'


function Home() {

    const element = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="wrapper">
            <div className="header" >
                <div id="start" >
                    <FiMenu size={22} style={{color: '#fff'}} />
                    <h1>YoutubeClone</h1>
                </div>

                <div className="searchComponent" >
                    <input className="searchbar" type="text" placeholder="Search" ></input>
                    <button id="searchButton" >
                        <FiSearch size={14} style={{color: '#7a7a7a'}} />
                    </button>
                    <FiMic size={22} style={{color: '#fff', paddingLeft: 20}} />
                </div>

                <div className="end">
                    <FiVideo size={22} style={{color: '#fff'}} />
                    <FiGrid size={22} style={{color: '#fff'}} />
                    <FiBell size={22} style={{color: '#fff'}} />
                    <FiUser size={22} style={{color: '#fff', marginLeft: 10}} />
                </div>
            </div>

            <div className="content" >
                <div className="sidebar">
                    <div className="item" >
                        <FiHome size={22} style={{color: '#fff'}} />
                        <p>Home</p>
                    </div>
                    <div className="item" >
                        <FiRadio size={22} style={{color: '#fff'}} />
                        <p>Trending</p>
                    </div>
                    <div className="item" >
                        <FiYoutube size={22} style={{color: '#fff'}} />
                        <p>Subscriptions</p>
                    </div>
                    <div className="item" >
                        <FiBook size={22} style={{color: '#fff'}} />
                        <p>library</p>
                    </div>
                </div>
                
                <div className="page" >
                    {element.map((item, index) => {
                        return (
                            <div classname="videoItem" >
                                <div className="video" />

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
                            </div>
                        )
                    })

                    }
                </div>
            </div>
        </div>
    )
}

export default Home