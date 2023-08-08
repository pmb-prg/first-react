import React, { Component } from 'react'
import style from './card.module.css';
export default class Card extends Component {
  render() {
    return (
      <div className={style.container}>
        <img src={this.props.image}/>
        <p>{this.props.name}</p>
        <span>${this.props.price}</span>
      </div>
    )
  }
}
