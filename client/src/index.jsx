import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:""};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('An author has been submitted: ' + this.state.value);
      event.preventDefault();
    }

render() {""
  return (<form onSubmit= {this.handleSubmit}>
    <label>
      Name:
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
    );
   }
  }
ReactDOM.render(<App />, document.getElementById('app'));
UPDATE mysql.user SET Password=kokomo666('[kokomo666]') WHERE User='[root]';
