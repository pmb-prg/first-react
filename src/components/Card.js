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
    const {image, name, price} = this.props;
    const{nums} = this.state;
    return (
      <div className={style.container}>
        <img src={image}/>
        <p>{name}</p>
        <span className={style.spann}>{nums ? `$${price} * ${nums} = $${price * nums}` : `$${price}`}</span>
        <div className={style.keys}>
          <span className={!nums && style.countDown} onClick={this.downOne}>-</span>
          <div className={style.count}>{nums}</div>
          <span onClick={this.upOne}>+</span>
        </div>
      </div>
    )
  }
}
