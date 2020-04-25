import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [ {name : 'Attiq', age: 20},
                {name: 'Ubaid', age : 23}
    ]
  }

  switchNameHandler = () => {
    this.setState({
            persons : [ {name : 'Attiq Ur Rehman', age: 20},
                        {name: 'Ubaid', age : 23}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>It is working now?</p>
        <button onClick={this.switchNameHandler}>Switch Button</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Programming is my hobby </Person>
      </div>
    );
  }
}

export default App;
