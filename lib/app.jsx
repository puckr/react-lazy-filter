import React from 'react';
import ReactDOM from 'react-dom';

class Filter extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Hello world!!!
      </div>
    );
  }
};

ReactDOM.render(<Filter />,
		document.getElementById('react-container'));
