import React, { useState } from "react";
import { Card, Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import {ProgressBar, Step} from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import './Question.css';
import questions from "../../data/questions";
import { useNavigate } from "react-router-dom";

const Question = (props) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const questionLength = questions.length;
    const navigate = useNavigate();

    const handleSkipClick = (e) => questionIndex < questionLength-1 ? setQuestionIndex(questionIndex + 1): navigate("/");
    const handleSkipAllClick = (e) => navigate("/");

    return ( <div className="surveyBox">
        <div className="progressBar">
            <ProgressBar
            percent={Math.ceil((questionIndex + 1)/ questionLength * 100)}
            filledBackground="green"
        ></ProgressBar>
        </div>
        <div className="questionCard">
            <Card style={{ height: "60%" }}>
                <Card.Body>
                    <Card.Title>{questions[questionIndex].question}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">eg. Joe Dilan</Card.Subtitle>
                    <div className="textInputWrapper">
                        <Form>
                            {
                                questions[questionIndex].answer
                            }
                        </Form>
                    </div>
                    <div className="nextButtonWrapper">
                        <Button variant="contained" className="nextButton" onClick={handleSkipClick}>next</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
        <footer className="footer">
            <div className="skipAll">
                <Button href="#" variant="text" className="skipAllButton" onClick={handleSkipClick}>Skip all</Button>
            </div>
            <div className="forward">
                <Button href="#" variant="text" className="skipButton" onClick={handleSkipClick}>skip</Button>
            </div>
            
        </footer>
    </div> );
}
 
export default Question;