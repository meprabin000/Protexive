import React from "react";
import { Button } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import "./InsuranceDescription.css";
import { FcCheckmark } from 'react-icons/fc';

const InsuranceDescription = (props) => {
    return ( <div className="box">
        <Topbar />
        <header>
            Supplemental Insurance
        </header>
        
        <div className="imageDescription">
            <img src="https://www.statefarm.com/content/dam/sf-library/en-us/secure/legacy/team-west/supp_health_hero-XS,S.jpeg" width="80%" />
        </div>

        <div className="textDescription">
        Supplemental health insurance is additional insurance you can purchase to help individuals and families deal with additional medical care and the extra costs associated with hospital stays.
        </div>    
        

        <div className="coverage">
            <h1>Coverage</h1>
            <ul>
                <li><FcCheckmark /> Deductibles and co-insurance amounts</li>
                <li><FcCheckmark />Private room and private duty nurse fees</li>
                <li><FcCheckmark /> Deductibles and co-insurance amounts</li>
                <li><FcCheckmark />Private room and private duty nurse fees</li>
                <li><FcCheckmark /> Deductibles and co-insurance amounts</li>
                <li><FcCheckmark />Private room and private duty nurse fees</li>
            </ul>
        </div>

        <div className="quoteButtonWrapper">
            <Button type="submit" className="quoteButton">Get a quote</Button>
        </div>
    </div> );
}
 
export default InsuranceDescription;