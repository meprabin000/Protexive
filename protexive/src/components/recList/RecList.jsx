import './recList.css'
import {Link} from 'react-router-dom'
import { GrNext } from 'react-icons/gr';

function RecList({rec}) {
  return (
    <div className='reclist-container'>
        <div className = 'rec-row'>
            <img className='rec-logo' src={rec.logo}/>
            <div className='rec-info'>
                <div className='rec-title'>{rec.cat}</div>
                <div className='rec-desc'>{rec.desc}</div>
                <Link className='pref-link' style={{textDecoration:'none'}} to={"/description"}><GrNext/></Link>
            </div>
        </div>
       
            
    </div>
  )
}

export default RecList