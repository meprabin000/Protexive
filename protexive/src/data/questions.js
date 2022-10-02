import React from "react";
import { Form } from "react-bootstrap";

const questions = [
  {
    question: "Full Name",
    answer: <Form.Control type="text" placeholder="Michale Tipsord " />,
  },
  {
    question: "Zip Code",
    answer: <Form.Control type="text" placeholder="76013" />,
  },
  {
    question: "Annual Income",
    answer: <Form.Control type="text" placeholder="$58000" />,
  },
  {
    question: "Do you own a house?",
    answer: <Form.Control type="text" />,
  },
  {
    question: "Do you own a pet?",
    answer: <Form.Control type="text" />,
  },
];

export default questions;
