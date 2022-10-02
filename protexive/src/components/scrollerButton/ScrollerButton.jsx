import './scrollerButton.css'
import {MdPets } from 'react-icons/md';
import {useState} from 'react'

function ScrollerButton({text, icon, subCategory, setSubCategories}) {
  const iconTag = `h${icon}`;
  const [selected, setSelected] = useState("green");

  

  const selectCategory = (e) =>{
    setSubCategories(subCategory)
    setSelected("red");
  }
  return (
    
    <div className='scroller-btn-container'>
        <button onClick={selectCategory} id = "btn-1" class="scr-btn-text" >
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