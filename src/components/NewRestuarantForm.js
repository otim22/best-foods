import React, { Component } from 'react';
import { Button, TextInput } from 'react-materialize';

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
    }

    render() {
      const { inputText } = this.state;

      return (
        <div>
          <TextInput
            label="Restuarant Name"
            value={inputText}
            onChange={ this.handleTextHandler }
            data-test="newRestuarantName"
          />
          <Button
            data-test="saveNewResturantButton"
            onClick={ this.handleSave }
          >
            Save
          </Button>
        </div>
      );
    }
}

export default NewRestuarantForm;
