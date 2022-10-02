import CategoryScroller from '../../components/categoryScroller/CategoryScroller';
import SubCategoryCard from '../../components/subcategorycard/SubCategoryCard';
import Topbar from '../../components/topbar/Topbar';
import './home.css';
import React from 'react';
import { useState } from 'react';

const Home = (props) => {
    const [subCategories, setSubCategories] = useState([])

    return ( 
        <>
        <Topbar/>
        <div className="home-container">
                <div className="user-intro">
                    <div className="user-name">Hey Alexander,</div>
                    <div className='welcome-msg'>Find the best insurance for your needs</div>
                </div>
                <div className="categories">
                    <div className='cat-title'>
                        Categories
                    </div>
                    <CategoryScroller setSubCategories={setSubCategories}/>
                </div>
                <div className='cat-title-2'>
                        Sub Categories
                </div>
                <div className = "sub-categories">

                    {subCategories.map((s) => (<SubCategoryCard subCatName={s.subCatName} desc={s.desc} />))}
                </div>
        </div>
        </>
    );
}
 
export default Home;