import React, { Component } from 'react';
import { Button, Row } from 'react-materialize';
import NewRestuarantForm from './NewRestuarantForm';
import RestuarantList from './RestuarantList';

export default class RestuarantListPage extends Component {
  state = {
    restuarantNames: [],
    showNewRestuarantForm: false,
  }

  handleShowNewRestuarantForm = () => {
    this.setState({ showNewRestuarantForm: true });
  }

  handleAddRestuarant = (newRestuarantName) => {
    this.setState(state => ({
      showNewRestuarantForm: false,
      restuarantNames: [
        newRestuarantName,
        ...state.restuarantNames,
      ],
    }));
  }

  render() {
    const { restuarantNames, showNewRestuarantForm } = this.state;

    return (
      <div>
        <Row>
          <Button
            data-test="addResturantButton"
            onClick={this.handleShowNewRestuarantForm}
          >
            Add Restuarant
          </Button>
        </Row>
        <Row>
          {
            showNewRestuarantForm
              ? (<NewRestuarantForm onSave={this.handleAddRestuarant} />)
              : null
          }
        </Row>
        <Row>
          <RestuarantList restuarantNames={restuarantNames} />
        </Row>
      </div>
    );
  }
}
