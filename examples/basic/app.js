import React, { Component } from 'React';
import ReactDOM from 'React-dom';

import ReactMultiselect from '../../lib/index';

class App extends Component {

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
      checked: ['LDN', 'PAR']
    }
    return (
      <div className='example'>
        <h1>react-multiselect</h1>
        <ReactMultiselect { ...props }/>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('container'));
