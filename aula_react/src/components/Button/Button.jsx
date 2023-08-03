import { Component } from 'react';
import './Button.css'
export class Button extends Component {
  
  render(){
    const { text, onClicks,disabled } = this.props
    return (
      <button 
      className='button'
      onClick={onClicks}
      disabled={disabled}
      >
        {text}
        </button>
    )
  }
}