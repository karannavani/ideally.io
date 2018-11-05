import React from "react";
import axios from "axios";

import {
  Container
  // Row,
  // Col
} from "reactstrap";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Axios from "axios";

export default class CreateForm extends React.Component {
  state = {
    maxChars: 140,
    charsLeft: 140
  };

  //   handleWordCount = ({ target }) => {
  //     console.log("target is", target);
  //     // const charCount = value.length;
  //     // const maxChars = this.state.maxChars;
  //     // const charsLeft = maxChars - charCount;
  //     // this.setState({charsLeft});
  //   };

  handleChange = ({ target: { name, value } }) => {
    if (name === "description") {
      const charCount = value.length;
      const maxChars = this.state.maxChars;
      const charsLeft = maxChars - charCount;
      this.setState({ charsLeft });
    }

    this.setState({ [name]: value }, () => console.log("state is", this.state));
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("clicked");
    const ideaData = {
      postedBy: "5bdf403ff7be4f598ba07e41",
      title: this.state.title,
      description: this.state.description,
      lookingFor: this.state.lookingFor
    };

	axios.post("/api/ideas", ideaData)
	.then(res => console.log("res is", res))
	.then(() => this.props.history.push('/'));
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              name="title"
              placeholder="Name of your idea/project"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="description">Desribe your idea</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              maxLength={this.state.maxChars}
              onChange={this.handleChange}
            />
            <p>{this.state.charsLeft} remaining</p>
          </FormGroup>

          <FormGroup>
            <Label for="lookingFor">Looking for</Label>
            <Input
              name="lookingFor"
              placeholder="Front-end developer"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}
