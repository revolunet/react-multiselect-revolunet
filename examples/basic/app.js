import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ReactMultiselect from '../../lib/index';

let defaultSelection = ['LDN', 'PAR'];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: defaultSelection
    }
  }

  onChange = selection => {
    this.setState({
      selection: selection
    })
  }

  render() {
    let props = {
      choices: [
        {
          text: 'Paris',
          value: 'PAR'
        },{
          text: 'New York',
          value: 'NYC'
        },{
          text: 'London',
          value: 'LDN'
        }, {
          text: 'Marrakech',
          value: 'MRK'
        }, {
          text: 'Singapour',
          value: 'SNG'
        }, {
          text: 'Bangkok',
          value: 'BKK'
        }, {
          text: 'Mirleft',
          value: 'MIR'
        }, {
          text: 'Shenzen',
          value: 'SHE'
        }, {
          text: 'Los Angeles',
          value: 'LA'
        }
      ],
      checked: defaultSelection,
      onChange: this.onChange
    }
    return (
      <div className='example'>
        <h1>react-multiselect</h1>
        <h2>selected: { this.state.selection.join(', ') }</h2>
        <ReactMultiselect { ...props }/>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('container'));
