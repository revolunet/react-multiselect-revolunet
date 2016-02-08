import React, { Component, PropTypes } from 'react';

export default class ReactMultiselect extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
  }

  render() {
    return <div onClick={ this.props.click }>{ this.props.name }</div>;
  }

}

