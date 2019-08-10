import React, { Component } from 'react';
import RestuarantListPage from './components/RestuarantListPage';
import { Row, Col } from 'react-materialize';

export default class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 l2">
            <RestuarantListPage />
          </Col>
        </Row>
      </div>
    );
  }
}
