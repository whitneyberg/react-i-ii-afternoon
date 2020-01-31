import React, { Component } from 'react';
import './App.css';
// import UpdateState from './Components/UpdateState';
import ChildOne from './Components/ChildOne';



class App extends Component{
    constructor(props){
      super(props)

        this.state = {

        
        }
    }



render() {
  return (
    <div className="App">
      <header><strong>Home</strong></header>

  
         <ChildOne/>
    </div>
  )}
}

export default App;
