import React from "react";
import { Form } from "react-bootstrap";

const questions = [
  {
    question: "Zip Code",
    answer: (
      <Form.Control type="text" className="textValue" placeholder="76013" />
    ),
  },
  {
    question: "Do you own a pet?",
    answer: (
      <>
        <Form.Check type="radio" name="ownPet" label="Yes" />
        <br />
        <Form.Check type="radio" name="ownPet" label="No" />
      </>
    ),
  },
  {
    question: "Annual Income",
    answer: (
      <Form.Control type="text" className="textValue" placeholder="$58000" />
    ),
  },
  {
    question: "Do you own a house?",
    answer: (
      <>
        <Form.Check type="radio" name="ownHouse" label="Yes" />
        <br />
        <Form.Check type="radio" name="ownHouse" label="No" />
      </>
    ),
  },
];

export default questions;
