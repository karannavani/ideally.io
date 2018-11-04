import React from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  CardTitle,
  CardText
} from "reactstrap";

export default class Feed extends React.Component {
  state = {};

  componentDidMount() {
    axios
      .get("/api/ideas")
      .then(res =>
        this.setState({ ideas: res.data }, () => console.log(this.state.ideas))
      );
  }

  render() {
    return <Container className="feed-content">
        <Row className="justify-content-center">
          {this.state.ideas && this.state.ideas.map(ideas => (
              <Col className="col-8" key={ideas._id}>
                <Card body className="feed-card">
                  <CardTitle>{ideas.title}</CardTitle>
                  <CardText>{ideas.description}</CardText>
                  <p>Posted by {ideas.postedBy.username}</p>
                  <p>
                    Looking for{" "}
                    {ideas.lookingFor.map((skill, i) => (
                      <Badge color="primary" key={i}>
                        {skill}
                      </Badge>
                    ))}
                  </p>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>;
  }
}
