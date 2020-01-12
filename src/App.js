import React, { Component } from 'react';
import './App.css';
import {getCoinDenominations} from './Utils'

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            enteredValue : '',
            result: ''
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event){
        this.setState({enteredValue : event.target.value})
    }

    // after submit button pressed, the result from util is stored in state to pass values in below html table.
    handleSubmit(){
        this.setState({result : getCoinDenominations(this.state.enteredValue)});
    }

    render(){
        return (
            <div className="App">
                <div className="row">
			        <span className="label-element">Enter Dollar Value:</span>
                    <input type="text" name="dollarAmount"  onChange={this.updateInput}
                           className="text-input"/>
                    <input className="text-input" type="Submit" onClick={this.handleSubmit} ></input>
                </div>
                <div className="row">
                    <table className="table ">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Denominations</th>
                            <th scope="col">Value</th>
                            <th scope="col">Count</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Dollar</td>
                            <td>1</td>
                            <td>{this.state.result.silverDollar}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Half Dollar</td>
                            <td>0.5</td>
                            <td>{this.state.result.halfDollar}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Quarter</td>
                            <td>0.25</td>
                            <td>{this.state.result.quarter}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Dime</td>
                            <td>0.10</td>
                            <td>{this.state.result.dime}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Nickel</td>
                            <td>0.05</td>
                            <td>{this.state.result.nickel}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Penny</td>
                            <td>0.01</td>
                            <td>{this.state.result.penny}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}
