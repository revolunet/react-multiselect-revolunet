import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ReactMultiselect from '../../lib/index';

class App extends Component {

  click() {
    alert('Roger that !');
  }

  render() {
    return (
      <div className='example'>
        <h1>react-multiselect</h1>
        <ReactMultiselect click={ this.click } name='Click me'/>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('container'));
