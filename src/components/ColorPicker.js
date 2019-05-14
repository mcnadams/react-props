import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../index.css';

export default class ColorPicker extends PureComponent {

  static propTypes = { 
    color: PropTypes.string.isRequired
  }

  clickHandler = () => {
    console.log(this.props.color);
  }

  render() {
    return (
      <button onClick={this.clickHandler} className={styles[this.props.color]}>{this.props.color}</button>
    );
  }

}
