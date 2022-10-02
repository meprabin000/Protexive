import ScrollerButton from '../scrollerButton/ScrollerButton'
import './categoryScroller.css'
import { categories } from '../../dummyData'

function CategoryScroller({setSubCategories}) {

  return (
    <>
       
        <div className='scroller-container'>
       
       {
           categories.map((c) => {
            return <ScrollerButton text={c.categoryName} icon={c.icon} subCategory={c.subCategory} setSubCategories={setSubCategories}/>
        })
       }
   </div>
    </>
    
  )
}

export default CategoryScroller