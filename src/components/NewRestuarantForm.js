import React, { Component } from 'react';
import { Button, TextInput, Row } from 'react-materialize';

class NewRestuarantForm extends Component {
    state = {
      inputText: '',
    };

    handleTextHandler = (event) => {
      this.setState({ inputText: event.target.value });
    }

    handleSave = () => {
      const { onSave } = this.props;
      const { inputText } = this.state;

      onSave(inputText);
      this.setState({ inputText: '' });
    }

    render() {
      const { inputText } = this.state;

      return (
        <Row>
          <TextInput s={12} m={8} l={10}
            label="Restuarant Name"
            value={inputText}
            onChange={ this.handleTextHandler }
            data-test="newRestuarantName"
          />
          <Button s={12} m={4} l={2}
            data-test="saveNewResturantButton"
            onClick={ this.handleSave }
          >
            Save
          </Button>
        </Row>
      );
    }
}

export default NewRestuarantForm;
