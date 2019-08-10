import React, { Component } from 'react';
import { Button, Row, Modal } from 'react-materialize';
import NewRestuarantForm from './NewRestuarantForm';
import RestuarantList from './RestuarantList';

export default class RestuarantListPage extends Component {
  state = {
    restuarantNames: [],
    isModalOpen: false,
  }

  handleAddRestuarant = newRestuarantName => {
    this.setState(state => ({
      restuarantNames: [
        newRestuarantName,
        ...state.restuarantNames,
      ],
      isModalOpen: false,
    }));
  }

  render() {
    const { restuarantNames, isModalOpen } = this.state;

    return (
      <div>
        <Modal
          id="addRestuarantModal"
          data-test="addRestuarantModal"
          open={isModalOpen}
          header="New Restuarant"
          trigger={
            <Button
              data-test="addResturantButton"
            >
              Add Restuarant
            </Button>
          }>
          <NewRestuarantForm onSave={this.handleAddRestuarant} />
        </Modal>
        <Row>
          <RestuarantList restuarantNames={restuarantNames} />
        </Row>
      </div>
    );
  }
}
