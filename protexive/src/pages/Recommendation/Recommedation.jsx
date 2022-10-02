import Topbar from '../../components/topbar/Topbar'
import './recommendation.css'
import { recs } from '../../dummyData'
import RecList from '../../components/recList/RecList'

function Recommedation() {
  return (
    <>
        <Topbar/>
         <div className='rec-container'>
            <div className="user-intro">
                    <div className="user-name-2">Personalized Reccomendations</div>
                    <div className="welcome-msg-2">
                        Based on 53% of the matching State Farm's customer profile
                    </div>
             </div>
             <div className="rec-list-container">
                {
                    recs.map((r) => (<RecList rec={r} />))
                }
                
             </div>
         </div>
    </>
   
  )
}

export default Recommedation