import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Todo from './Component/Todo'
import Login from './Component/login';

class App extends React.Component {
  state={
    confirmation:false
}
  render(){
    if(this.state.confirmation){
      return (
        <div className="App">
         <Todo />
        </div>
      )
    }
    return(
      <div className="App">
      <Login login={(confirmation) => this.setState({confirmation:!this.state.confirmation})}/>
     </div>
    )
  
  }

}

export default App;

