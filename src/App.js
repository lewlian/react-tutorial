import React, { Component } from 'react';
import logo from './logo.svg';
import { Greet } from './components/Greet'
import './App.css';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/Stylesheet';
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
class App extends Component {
  render() {
    return (
      <div className="App">

        <Form />
        {/* <NameList /> */}
        {/* <StyleSheet primary={true} />
        <Inline />
        <h1 className='error'> Error </h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <FunctionClick /> */}
        {/* <EventBind /> */}
        {/* <Counter /> */}
        {/* <Greet name="Sean" heroName="Batman">
         
          <p>
            This is children prop
          </p>
        </Greet> */}

        {/* This is a self closing tab  */}
        {/* <Greet name="Ben" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Josh" heroName="WonderWoman" /> */}

        {/* <Welcome name="Sean" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonderwoman" /> */}


      </div>
    );
  }
}

export default App;
