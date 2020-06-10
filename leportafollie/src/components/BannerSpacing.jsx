import React, { Component } from 'react';
import coffee from '../img/kophe.svg'

export default class About extends Component {
  render() {
    return (
        <div className="Banner-spacing">
<div className="kophe">
                        <img className="kophe" src = {coffee} alt="Makeespresso"/>
                        </div>
        </div>
    )
  }
}