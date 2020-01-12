import React, { Component } from 'react';
import './App.css';
import {getCoinDenominations, justAnAlert} from './Utils'

let coinDenominations = null;

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            enteredValue : '',
            coinDenominations: null
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event){
        this.setState({enteredValue : event.target.value})
    }

    handleSubmit(){
        console.log('Your input value is: ' + this.state.enteredValue);
        coinDenominations = getCoinDenominations(this.state.enteredValue);
        console.log("coinDenominations="+JSON.stringify(coinDenominations));
        console.log("coinDenominations.silverDollar="+coinDenominations.silverDollar);
        justAnAlert();
    }

    render(){
        // const coinDenominations = this.state.coinDenominations;
        return (
            <div className="App">
                <div className="row">
			        <span className="label-element">Enter Dollar Value:</span>
                    <input type="text" name="dollarAmount"  onChange={this.updateInput}
                           className="text-input"/>
                    <input className="text-input" type="Submit" onClick={this.handleSubmit} ></input>
                </div>
                <div className="row">
                    <span className="label-element">Silver Dollar :</span>
                    <span className="label-element">Silver Dollar :</span>
                </div>
                <div className="row">
                    <span className="label-element">Half Dollar Value:</span>
                    <span className="label-element">Half Dollar Value:</span>
                </div>
                <div className="row">
                    <span className="label-element">Quarter:</span>
                    <span className="label-element">Quarter:</span>
                </div>
                <div className="row">
                    <span className="label-element">Dime:</span>
                    <span className="label-element">Dime</span>
                </div>
                <div className="row">
                    <span className="label-element">Nickel:</span>
                    <span className="label-element">Nickel</span>
                </div>
                <div className="row">
                    <span className="label-element">Penny:</span>
                    <span className="label-element">Penny</span>
                </div>

            </div>
        );
    }

}
