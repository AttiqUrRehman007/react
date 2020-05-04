import React, { Component } from 'react';
import classes from './App.css';
// import styled from 'styled-components';
import Person from '../components/Persons/Person/Person';
//import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'black' : 'teal'};
//       color: white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;
//
//       &:hover{
//           background-color: ${props => props.alt ? 'navy' : 'aqua'};
//           color: black;
//       }
//     `

class App extends Component {
  state = {
    persons : [ {id: 'ajks2f', name : 'Attiq', age: 20},
                {id: 'jfss5d', name: 'Ubaid', age : 23}
    ]
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //           persons : [ {name : newName, age: 20},
  //                       {name: 'Ubaid', age : 23}
  //     ],
  //           showPersons: false
  //       }
  //   )
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person = {
        ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons})
  }

  deletePersonHandler = (indexPerson) => {
      const persons = [...this.state.persons];
      persons.splice(indexPerson, 1)
      this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doShow = this.state.showPersons
    this.setState({showPersons: !doShow})
  }

  render() {
    let btnClass = '';
    let persons = null;
    if(this.state.showPersons)
    {
      persons = (
          <div>
              {this.state.persons.map((person, index)=> {
                  return (  <Person
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)}/>)


              })}
          </div>
      )
        btnClass = classes.Red;
    }
    const assignClasses = [];
    if(this.state.persons.length <= 2){
        assignClasses .push(classes.red)
    }
    if(this.state.persons.length <= 1){
        assignClasses .push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm React App</h1>
        <p className={assignClasses.join(' ')}>It is really working WoW</p>
        <button
            className={btnClass}
            onClick={this.togglePersonHandler}
          //  onClick={() => this.switchNameHandler('Attiq Ur Rehman')}
        >Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
