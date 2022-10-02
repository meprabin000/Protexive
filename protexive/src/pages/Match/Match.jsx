import Topbar from '../../components/topbar/Topbar'
import './match.css'
import { FaBeer, FaCarSide,FaChevronDown} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Match() {
  return (

    <>
    <Topbar/>
    <div className='match-container'>
        <div className="user-intro-3">
            <div className="user-name-3">
                $124 - $180/mo
            </div>
            <div className='welcome-msg-3'>Estimated Auto</div>
        </div>

        <div className='coverage-breakdown'>
                <div className='cbg-top'>
                    <div className="cbg-title">
                        Policy Coverage
                    </div>
                    <div className='cbg-logo'>
                        <FaChevronDown/>
                    </div>
                </div>
                <div className="cbg-detail">
                  <div className='cbg-item'>Bodily Injury & Property Damange</div>
                  <div className='cbg-price'>$50K / $100K / $50K</div>
                </div>
                <div className="cbg-detail">
                  <div className='cbg-item'>Comp & collison deductibles</div>
                  <div className='cbg-price'>$500 / $500</div>
                </div>
                
        </div>
        <div className="ymal-container">
            <div className="user-name-4">
                Alex, personalized for you
            </div>
            <div className='ymal-pref'>
                <div className='pref-row'>
                    <img className='pref-logo' src={"https://static.vecteezy.com/system/resources/previews/005/484/042/original/dog-logo-illustration-free-vector.jpg"}/>
                    <div className='pref-info'>
                        <div className='pref-title'>
                                Pet Insurance   
                        </div>
                        <div className="pref-text">
                                You already consider them a member of the family. Why not care for them the say way?
                        </div>
                    </div>
                </div>
                <div className='pref-more'>
                    <Link style={{textDecoration:'none', color:'white'}} to={"/"}>More Insurance</Link>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Match