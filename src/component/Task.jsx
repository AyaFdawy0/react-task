import React, { Component } from 'react';

class Task extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:0
        };
        console.log('constructor')
    }
    componentDidMount(){
        console.log('Did Mount');
    }
    render() {
        return (
            <div>
                <span style={{paddingRight:'10px'}}>Task{this.state.counter}</span>
                
                <button onClick={()=>this.setState((oldState)=>({counter:oldState.counter+1}))}>
                 {" "} +
                </button>
            </div>
        );
    }
}

export default Task;