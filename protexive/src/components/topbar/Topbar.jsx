import './topbar.css'
import { CgProfile } from 'react-icons/cg';


function Topbar() {
  return (
    <div className="topbar-container">
        <img className = "logo" src={"https://wp.cghnyc.com/media/State-Farm-Hero.svg"}/>
        <CgProfile className='profile-logo'/>
    </div>
  )
}

export default Topbar