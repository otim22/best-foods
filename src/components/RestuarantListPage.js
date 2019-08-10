import React, { Component } from 'react';
import { Button } from 'react-materialize';
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
        <Button
          data-test="addResturantButton"
          onClick={this.handleShowNewRestuarantForm}
        >
          Add Restuarant
        </Button>
        {
          showNewRestuarantForm
            ? (<NewRestuarantForm onSave={this.handleAddRestuarant} />)
            : null
        }
        <RestuarantList restuarantNames={restuarantNames} />
      </div>
    );
  }
}
