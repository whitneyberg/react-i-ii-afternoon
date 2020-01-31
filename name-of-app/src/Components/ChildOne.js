import React, { Component } from 'react'
import data from '../data'
import UpdateState from './UpdateState'
import '../App.css'

class ChildOne extends Component{
    constructor(props){
        super(props)

        this.state = {
            employees : data,
            index: 0
        }
    }

    indexBack = () => {
        this.setState({ index: this.state.index - 1 })
        if (this.state.index === 0) {
            this.setState({ index: data.length - 1 })
        }
    }
    
    indexForward = () => {
        this.setState({ index: this.state.index + 1 })
        if (this.state.index === data.length - 1) {
            this.setState({ index: 0 })
        }
    }
    



    render() {

        const employeeList = this.state.employees.map(el => {
          return <UpdateState employees = {el} key = {el.id}/>
        })
        
        return( 
        
        <div>{employeeList[this.state.index]}
    
    <button className = 'prev' onClick = {this.indexBack}> &laquo; Previous </button>
    
    <button className = 'forward' onClick = {this.indexForward}>Next &raquo;</button>
        
 
    
        </div>
        )}
}

export default ChildOne

