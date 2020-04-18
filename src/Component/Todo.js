import React, { Component } from 'react'
import uuid from "uuid";
import  Css from './CSS/todo.css'

class Todo extends Component {

    constructor(props) {
        super(props)
    
       this.input=React.createRef()
       this.state={
           list:[],
          }
        }


    
    addTask=()=>{
    
    const Items={
            id:uuid.v4(),
            value:this.input.current.value,
            Date: new Date().toUTCString()
        };

        if(localStorage.getItem('list')==null){
            const list=[]
            list.push(Items);
            localStorage.setItem("list",JSON.stringify(list))
        }
        else{
            const list=JSON.parse(localStorage.getItem('list'))
            list.push(Items)
            localStorage.setItem("list",JSON.stringify(list))

        }
        this.setState({
            list:JSON.parse(localStorage.getItem('list'))
            
        }
        );
    }

    componentDidMount() {
        const list = window.localStorage.getItem('list');
        const parsedList = JSON.parse(list);
        if(list == null){
            return false
        }
        else{
            this.setState({
                list: parsedList,
            })
            console.log(this.state.list);
        }
    }
    
    deleteItem=(event)=> {
        
        
        let index = event.target.getAttribute('data-key')
        let listValue=JSON.parse(localStorage.getItem('list'));
        listValue.splice(index,1)
        this.setState({list:listValue});
        localStorage.setItem('list',JSON.stringify(listValue))
    }
    
    editItem=(event)=> {
        const Items1={
            id:uuid.v4(),
            value:this.input.current.value,
            Date: new Date().toUTCString()
        };
        let index = event.target.getAttribute('data-key')
        let listValue=JSON.parse(localStorage.getItem('list'));
        listValue[index] = Items1;
        this.setState({list:listValue});
        localStorage.setItem('list',JSON.stringify(listValue))
    }

    done=(event)=> {
        const Items1={
            id:uuid.v4(),
            value:"COMPLETED : "+this.input.current.value,
            Date: new Date().toUTCString()
        };
        let index = event.target.getAttribute('data-key')
        let listValue=JSON.parse(localStorage.getItem('list'));
        listValue[index] = Items1;
        this.setState({list:listValue});
        localStorage.setItem('list',JSON.stringify(listValue))
        
    }

    
    
    
    render() {
        return (
            <div className="main-container">
                <h1>TodoIntershipTaskReact</h1>
                <hr/>
                <div className="container">
                    <input type="text" placeholder="AddTask/EditTask" id="likh" ref={this.input}></input>
                        <button onClick={this.addTask} className="button" >Add</button>
                            <ol>
                                {
                                    this.state.list.map((item,index)=>
                                    {   
                                        return(<li key={item.id}> {item.value}
                                        <button className="button" type="button" value="edit" data-key={index} onClick={this.editItem}>Edit</button>
                                        <button className="button" type="button" value="done" data-key={index} onClick={this.done}>Done</button>
                                        <button className="button" type="button" value="delete" data-key={index} onClick={this.deleteItem}>Delete</button></li>)
                                    })
                                } 
                            </ol>
                            
                </div>
                
                <h2>@Rishi Sharma</h2>
            </div>
            
        )
    }
}

export default Todo