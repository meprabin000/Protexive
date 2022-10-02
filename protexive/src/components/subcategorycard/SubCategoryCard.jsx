import './subCategoryCard.css'
import { GrNext } from 'react-icons/gr';

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
                <GrNext className='btn-nxt-logo'/>
            </button>
        
        
    </div>
  )
}

export default SubCategoryCard