import React from "react";
// import axios from "axios";

import {
    Container,
    // Row,
    // Col
} from "reactstrap";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CreateForm extends React.Component {
    render() {
        return (
            <Container>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>

                <Button>Submit</Button>
            </Form>
            </Container>
        );
    }
}