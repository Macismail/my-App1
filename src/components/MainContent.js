import React, { Component } from 'react';
import logo from '../logo.svg';
import {Button, Alert, Card, Container, Row, Col} from "react-bootstrap";


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      valu : "This is the state content",
      count: 0
    }
    this.change = this.change.bind(this)
  }

  change (){
    this.setState(prevstate => ({
      count : prevstate.count+1
    }))
  }

  render() { 
    return (  
      <div>
        <Container>
        <Row>
          <Col md={4}>
            <Card style={{ width: '18rem', background: 'green' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>{this.state.valu}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="danger">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>{this.state.valu}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>{this.state.valu}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
          <Alert variant="primary"> Primary <b>{this.state.count}</b> </Alert>
          <Button variant="success" onClick={this.change}>Add 1</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="link" onClick={this.change}>Click to add 1</Button>
          <hr/>
          <Alert variant="success"> Success </Alert>
        </Container>
      </div>
    );
  }
}
 
export default MainContent;