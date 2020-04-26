import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [ {name : 'Attiq', age: 20},
                {name: 'Ubaid', age : 23}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
            persons : [ {name : newName, age: 20},
                        {name: 'Ubaid', age : 23}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [ {name : 'Attiq', age: 20},
        {name: event.target.value, age : 23}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>It is working now?</p>
        <button
            style={style}
            onClick={() => this.switchNameHandler('Attiq Ur Rehman')}
        >Switch Button</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Attiq007')}
            changed={this.nameChangedHandler}
        >
            Programming is my hobby
        </Person>
      </div>
    );
  }
}

export default App;
