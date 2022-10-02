import React from "react";
import { Form } from "react-bootstrap";

const questions = [
    {
        question: "What is your full name?",
        answer: <Form.Control type="text" />
    },
    {
        question: "Where do you live?",
        answer: <Form.Control type="text" placeholder="city, state" />
    },
    {
        question: "What is your average annual income?",
        answer: <Form.Control type="text" placeholder="58000" />
    },
    {
        question: "Do you own a house?",
        answer: <Form.Control type="text" />
    },
    {
        question: "Do you own a pet?",
        answer: <Form.Control type="text" />
    }
]

export default questions;