import './topbar.css'
import { CgProfile } from 'react-icons/cg';
import {Link} from 'react-router-dom'


function Topbar() {
  return (
    <div className="topbar-container">
  
        <Link to={"/"}>
            <img className = "logo" src={"https://wp.cghnyc.com/media/State-Farm-Hero.svg"}/>
        </Link>
        <CgProfile className='profile-logo'/>
    </div>
  )
}

export default Topbar