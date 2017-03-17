import React from 'react';
import ReactDOM from 'react-dom';
import countries from '../countries'

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {query: ''};
  }

  textChangeHandler = (e) => {
    const query = e.target.value.toLowerCase();
    this.setState({ query });
  }

  render() {
    const filteredCountries = countries.map((country, idx) => {
      const { name : oName, code : oCode } = country;
      const name = oName.toLowerCase();
      const code = oCode.toLowerCase();
      const { query } = this.state;
      if (name.includes(query) || code.includes(query)) {
        return <li key={idx}>{oName}</li>
      }
    });
    return (
      <div className='container'>
        <h2>Filtered List</h2>
        <input type='text' placeholder='Filter...'  onChange={this.textChangeHandler} />
        <div className='list'>
          {filteredCountries}
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Filter />,
		document.getElementById('react-container'));
