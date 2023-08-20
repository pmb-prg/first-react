import React, { Component } from 'react'
import style from './search.module.css';
export default class Search extends Component {
    constructor(){
        super();
        this.state={
            text: '',
        }
    }
    changeHandler = event =>{
        this.setState({
            text: event.target.value,
        })
    }
  render() {
    return (
        <div className={style.container}>
            <div className={style.phoneSearch}>
            <h2>Search Phones</h2>
            <h4>{this.state.text}</h4>
            </div>
            <div className={style.searchBox}>
            <input type='text'value={this.state.text} placeholder='Search' onChange={this.changeHandler} />
            <button>Search</button>
            </div>
        </div>
    );
  }
}
