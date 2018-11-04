import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, CardTitle, CardText } from "reactstrap";


export default class Feed extends React.Component {
  state = {};

  componentDidMount() {
      axios.get('/api/ideas')
        .then(res => this.setState({ ideas: res.data }, () => console.log(this.state.ideas)))
  }

  render() {
    return <Container>
        {this.state.ideas && this.state.ideas.map(ideas => (
            <Card body key={ideas._id}>
              <CardTitle>{ideas.title}</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          ))}
      </Container>;
  }
}