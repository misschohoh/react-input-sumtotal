import React from "react";
import ReactDOM from "react-dom";

const App = props => {
return <NumberOfStudents />;
};

class NumberOfStudents extends React.Component {
constructor(props) {
super(props);
this.state = {
nq1: 0,
nq2: 0,
nq3: 0,
nq4: 0,
total: 0
}
}

totalSum() {
this.setState({total: parseInt(this.state.nq1) + parseInt(this.state.nq2) + parseInt(this.state.nq3) + parseInt(this.state.nq4)});
}

render() {
return (
<div>

	

	<input  type="number" onChange={event => this.setState({ nq1: event.target.value })} value={this.state.nq1} />

	<br /><br />

	<input  type="number" onChange={event => this.setState({ nq2: event.target.value })} value={this.state.nq2} />

	
	<br /><br />
		<input  type="number" onChange={event => this.setState({ nq3: event.target.value })} value={this.state.nq3} />

	
	<br /><br />
		<input  type="number" onChange={event => this.setState({ nq4: event.target.value })} value={this.state.nq4} />

	
	<br /><br />
	<hr />
	
	<h1>Total Students: {this.state.total}</h1>
	<button onClick={this.totalSum.bind(this)}>Get Total Students</button>
</div>
)
}
}

ReactDOM.render(<App />, document.getElementById('root'));