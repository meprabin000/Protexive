import './subCategoryCard.css'
import { GrNext } from 'react-icons/gr';
import {Link} from 'react-router-dom'

function SubCategoryCard({subCatName, desc}) {
  return (
    <div className='sub-cat-container'>
        <div className='sub-cat-title'>
            {
                subCatName
            }
        </div>
        <div className='sub-cat-info'>
             {
                desc
             }
        </div>
        
            <button className='btn-next'>
               <Link to={"/questions"}>
                    <GrNext className='btn-nxt-logo'/>
                    
               </Link> 
            </button>
        
        
    </div>
  )
}

export default SubCategoryCard