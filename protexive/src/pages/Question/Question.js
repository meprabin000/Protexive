import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "./Question.css";
import questions from "../../data/questions";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import { GrLinkNext } from "react-icons/gr";

const Question = (props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const questionLength = questions.length;
  const navigate = useNavigate();

  const handleSkipClick = (e) =>
    questionIndex < questionLength - 1
      ? setQuestionIndex(questionIndex + 1)
      : navigate("/match");
  const handleSkipAllClick = (e) => navigate("/match");

  return (
    <div className="q-container">
      <Topbar />
      <div className="user-intro">
        <div className="user-name-2">Hey Alex,</div>
        <div className="welcome-msg-2">
          Let's match you with the best insurance
        </div>
      </div>
      <div className="surveyBox">
        <div className="progressBar">
          <ProgressBar
            percent={Math.ceil(((questionIndex + 1) / questionLength) * 100)}
            filledBackground="#f01716"
          ></ProgressBar>
        </div>
        <div className="questionCard">
          <Card className="qcard" style={{ height: "60%" }}>
            <Card.Body>
              <Card.Title className="question">
                {questions[questionIndex].question}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <div className="textInputWrapper">
                <Form>{questions[questionIndex].answer}</Form>
              </div>
              <div className="options">
                <div className="options-1"></div>
                <div className="options-1"></div>

                <div className="skipAll">
                  <Button
                    href="#"
                    variant="text"
                    className="skipAllButton"
                    onClick={handleSkipAllClick}
                  >
                    Skip all
                  </Button>
                </div>
                <div className="forward">
                  <Button
                    href="#"
                    variant="text"
                    className="skipButton"
                    onClick={handleSkipClick}
                  >
                    skip
                  </Button>
                </div>
                <div className="nextButtonWrapper">
                  <Button className="nextButton" onClick={handleSkipClick}>
                    <GrLinkNext className="btn-icon" />
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        <footer className="footer"></footer>
      </div>
    </div>
  );
};

export default Question;
