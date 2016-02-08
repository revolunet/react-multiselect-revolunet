import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


export default class ReactMultiselect extends Component {

  static propTypes = {
    choices: PropTypes.array.isRequired,
    checked: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      filter: null,
      checked: props.checked || []
    };
  }

  renderCheckbox = item => {
    return <Checkbox value={ item.value} key={ item.value } checked={ ~this.state.checked.indexOf(item.value) } text={ item.text } onChange= { e => this.onCheck(e, item) }/>
  }

  onCheck = (e, item) => {
    if (e.target.checked) {
      this.setState({
        checked: this.state.checked.concat(item.value)
      });
    } else {
      let checked = this.state.checked;
      checked.splice(checked.indexOf(item.value), 1)
      this.setState({
        checked: checked
      });
    }
  }

  renderCheckboxes = results => {
    return results.filter(item => item.value && item.text).map(this.renderCheckbox);
  }

  isChecked = value => {
    return this.state.checked.indexOf(value) > -1;
  }

  onSearchChange = e => {
    this.setState({
      filter: e.target.value
    });
  }

  getResults = () => {
    let results = this.props.choices;
    if (this.state.filter) {
     results = results.filter(result => {
       return this.isChecked(result.value) || (('' + result.text).match(new RegExp('.*' + this.state.filter + '.*', 'gi')));
     });
    }
    results.sort(keysrt('text'));
    return results;
  }

  render() {
    let results = this.getResults();
    return (<div>
              <Search onChange={ this.onSearchChange }/>
              { this.renderCheckboxes(results) }
            </div>);
  }

}

// sort on key values
function keysrt(key) {
  return function(a,b){
   return (a[key].toLowerCase() > b[key].toLowerCase());
 }
}

const Checkbox = props => {
  return (<div>
            <label>
              <input type='checkbox' defaultValue={ props.value } defaultChecked={ props.checked } onChange={ props.onChange }/>
              { props.text }
            </label>
          </div>);
};

const Search = props => {
  return (<div>
            <input type='text' className='search' placeholder='Search...' onChange={ props.onChange }/>
          </div>);
};

