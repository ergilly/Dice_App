import React, { Component } from 'react';


class DiceRoll extends Component{

constructor(props){
  super(props)
  this.state = {
    answer: 0,
    max: 0
  };
  this.diceRoll = this.diceRoll.bind(this)
  this.setMax = this.setMax.bind(this)
  this.submitMax = this.submitMax.bind(this)

}

setMax(maxNum) {
  this.setState({max: maxNum})
}

diceRoll(){
  this.setState(() => {
    return {answer: (Math.floor(Math.random()* Math.floor(this.state.max))+1)}
  })
}

submitMax() {
  this.setState({max: document.getElementById('form').value})
  this.diceRoll()
}

render(){
  return(
  <div className='flexbox'>
  <h1>{this.props.title}</h1>
  <h1>{this.state.answer}</h1>
  <h3>Select Dice Size</h3>
  <div>
  <button onClick = {() => this.setMax(4)}>D4</button>
  <button onClick = {() => this.setMax(6)}>D6</button>
  <button onClick = {() => this.setMax(8)}>D8</button>
  <button onClick = {() => this.setMax(10)}>D10</button>
  <button onClick = {() => this.setMax(12)}>D12</button>
  <button onClick = {() => this.setMax(20)}>D20</button>
  </div>
  <button onClick = {this.diceRoll}>Roll The Dice</button>
  <form>
    <input id='form' type='text' name='MaxDiceNum'/> <br/>
    <button onClick = {this.submitMax}>Roll Dice With Specific Max</button>
  </form>
  </div>
)
}

}

export default DiceRoll;
