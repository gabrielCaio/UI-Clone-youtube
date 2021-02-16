import './style.css'
import { FiMenu, FiSearch, FiBell, FiVideo, FiGrid, FiMic, FiUser } from 'react-icons/fi'

export default () => {
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
                {/* <div className="sidebar"> */}
                    {/* a */}
                {/* </div> */}
                <div className="page" >
                    {/* a */}
                </div>
            </div>
        </div>
    )
}