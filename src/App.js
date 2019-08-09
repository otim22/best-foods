import React, { Component } from 'react';

export default class App extends Component {
    state = {
      name: "Otim",
    };

    render() {
      return (
        <div className="header">
          <h1>Header content, {this.state.name}</h1>
        </div>
      );
    }
}
