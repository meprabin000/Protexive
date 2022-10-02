import './scrollerButton.css'
import {MdPets } from 'react-icons/md';
import {useState} from 'react'

function ScrollerButton({text, icon, subCategory, setSubCategories}) {
  const iconTag = `h${icon}`;

  

  const selectCategory = (e) =>{
    setSubCategories(subCategory)
  }
  return (
    
    <div className='scroller-btn-container'>
        <button onClick={selectCategory} class="scr-btn-text">
            {
                icon
            }
            
            {
                text
            }
           
            
        </button>
        
    </div>
  )
}

export default ScrollerButton