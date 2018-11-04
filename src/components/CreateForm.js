import React from "react";
// import axios from "axios";

import {
  Container
  // Row,
  // Col
} from "reactstrap";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class CreateForm extends React.Component {
  state = {
    maxChars: 140,
    charsLeft: 140
  };

  handleWordCount = ({target:{value}}) => {
    const charCount = value.length;
    const maxChars = this.state.maxChars;
    const charsLeft = maxChars - charCount;
    this.setState({charsLeft});
  }

  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input placeholder="Name of your idea/project" />
          </FormGroup>

          <FormGroup>
            <Label for="description">Desribe your idea</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              maxLength={this.state.maxChars}
              onChange={this.handleWordCount}
            />
            <p>{this.state.charsLeft} remaining</p>
          </FormGroup>

          <FormGroup>
            <Label for="description">Looking for</Label>
            <Input placeholder="Front-end developer" />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}
