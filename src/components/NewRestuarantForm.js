import React, { Component } from 'react';

class NewRestuarantForm extends Component {
    state = {
      inputText: '',
    }

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
          <input
            type="text"
            value={inputText}
            onChange={ this.handleTextHandler }
            data-test="newRestuarantName" />
          <button
            data-test="saveNewResturantButton"
            onClick={ this.handleSave }
          >
            Save
          </button>
        </div>
      );
    }
}

export default NewRestuarantForm;
