import React, { Component } from 'react'
import style from './card.module.css';
export default class Card extends Component {
  constructor(){
    super();
    this.state ={
      nums: 0,
    }
  }

  upOne = () =>{
    this.setState({
      nums: this.state.nums + 1,
     
    })
  }
  downOne = () =>{
    if(this.state.nums >= 1){
      this.setState({
        nums: this.state.nums - 1,
      })  
    }
  }
   

  render() {
    return (
      <div className={style.container}>
        <img src={this.props.image}/>
        <p>{this.props.name}</p>
        <span className={style.spann}>${this.props.price}</span>
        <div className={style.keys}>
          <span className={this.state.nums ? "" : style.countDown} onClick={this.downOne}>-</span>
          <div className={style.count}>{this.state.nums}</div>
          <span onClick={this.upOne}>+</span>
        </div>
      </div>
    )
  }
}
