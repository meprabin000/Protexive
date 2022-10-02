import ScrollerButton from '../scrollerButton/ScrollerButton'
import './categoryScroller.css'
import { categories } from '../../dummyData';
import { useState, useEffect } from 'react';

function CategoryScroller({setSubCategories}) {
   
  useEffect(() => {
    
    return () => {
      setSubCategories(categories[0].subCategory)
    };
  }, []);
  
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