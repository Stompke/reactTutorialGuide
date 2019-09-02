//npm start
import React, { Component } from 'react';
// 'useState is one of the most important states'
//use state allows us to manage state in a functional component
//use state ALWAYS returns an array with Exactly TWO ELEMENTS
import logo from './logo.svg';
import './App.css';
import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person.js';

// import './SomeDiv.js';
 class App extends Component {

    state = {
        persons : [
          { id: '167',name: 'Shawn', age: 26},
          { id: '412',name: 'Austin', age: 27},
          { id: '125',name: 'Noah', age: 5},
          { id: '652',name: 'Raylah', age: 3}

        ],
        otherState: 'some other value',
        showPersons: false
      };

      deletePersonHandler = (personIndex) => {
        //use this or the [...this.state.persons] way //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
      }

      nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
        });

        const person = {
          ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

      this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }


    render() {
      const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      };

      let persons = null;
      //this should be default
      if (this.state.showPersons) {
        persons = (
            <div>
              {this.state.persons.map((person, index) => {
                return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
              })}
            </div>
          );

          style.backgroundColor = 'red';
          style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
          }
      }


      const classes = [''];
      if (this.state.persons.length <= 2){
        classes.push('red'); // this will make the classess = ['red']
      }
      if (this.state.persons.length <=1) {
        classes.push('bold'); // this will make the classes = ['red','bold']
      }


      return (
        <StyleRoot>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className={classes.join(' ')} >This is Really Working</p>

            <button
            style={style}
            onClick={this.togglePersonsHandler}
            > Toggle Persons Man</button>


            {persons}






          </header>
        </div>
        </StyleRoot>
      );
    }
    }

    export default Radium(App);



//}
