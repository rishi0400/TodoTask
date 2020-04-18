import React, { Component } from 'react';
import Css from './CSS/login.css'
import { render } from '@testing-library/react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Todo from './Todo'    

class Login extends Component {

    constructor(props) {
        super(props)
    
       this.input=React.createRef()
       this.state={
        list:[],
        username:"",
        password:""
          }
        }

    handleChange = event => {
        this.setState({ username: event.target.value });
          };    
    handleChange1 = event => {
        this.setState({ password: event.target.value });
            };
    loginCheck=()=>{
        if((this.state.username === "sam" || this.state.username === "harry" || this.state.username === "kohli")&&this.state.password === "123"){
          this.props.login(true)
        }
        else{
            alert("Bad Credentials . Try Again")
        }

    }
        
    render() {
    
        return (
            <div className="main-container">
                <h1>TodoIntershipTaskReact</h1>
                <hr/>
                <div className="container">
                    <input type="text" value={this.state.username}
           onChange={this.handleChange} placeholder="Username"></input>                   
                    <input type="password" value={this.state.password}
           onChange={this.handleChange1} placeholder = "Pasword"></input>
                        <button onClick={this.loginCheck} className="button" >Login</button>
                            
                </div>
                <h2>@Rishi Sharma</h2>
            </div>
            
        )
    }






}

export default Login