
function TableCreation (props) {

	return(
		<div>
			<table>
				<thead>
					<tr>
						<th>Month</th>
						<th>Work</th>
						<th>Exercise</th>
						<th>Travel</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th><button>{props.object.month}</button></th>
						<th>{props.object.work}</th>
						<th>{props.object.exercise}</th>
						<th>{props.object.travel}</th>
					</tr>
				</tbody>
			</table>
		</div>
		);
}

function DataCreation(props) {
	return(
			<div>
				{props.sometime.map(x => <TableCreation object={x} key={x.id} />)}
			</div>
		);
}




function AppCreation(props) {


	return(
		<div>
			<h1>Hello again</h1>
			<DataCreation sometime={thisyear} />
			<DataCreation sometime={nextyear} />
			<DataCreation sometime={theyearafter} />
		</div>
		);
}



class AppComponent extends React.Component {
	


	constructor(props) {
		super(props);
		this.state = {count: 5, title: "Hello world"};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);

	}

	decrement() {
		const {count} = this.state;
		this.setState({count: count - 1});
	}
	
	increment() {
		const {count} = this.state;
		this.setState({count: count + 1});
	}

	render() {
		// const {count, title} = this.state;

		const thisyear = [
		{month: this.state.count, work: "ads in games and learning", exercise: "jogging", travel: "rogozno", id: "0"},
		{month: this.state.count + 1, work: "work with some open source projects", exercise: "pilates and climbing", travel: "none", id: "1"},
		{month: this.state.count + 1, work: "training as a react developer", exercise: "pilates and acrobatics", travel: "some events in Poland", id: "2"}
		]
		
		const nextyear = [
		{month: this.state.count + 1, work: "ads in games and learning", exercise: "jogging", travel: "rogozno", id: "0"},
		{month: this.state.count + 1, work: "work with some open source projects", exercise: "pilates and climbing", travel: "none", id: "1"},
		{month: this.state.count + 1, work: "training as a react developer", exercise: "pilates and acrobatics", travel: "some events in Poland", id: "2"}
		]

		const theyearafter = [
		{month: this.state.count + 1, work: "ads in games and learning", exercise: "jogging", travel: "rogozno", id: "0"},
		{month: this.state.count + 1, work: "work with some open source projects", exercise: "pilates and climbing", travel: "none", id: "1"},
		{month: this.state.count + 1, work: "training as a react developer", exercise: "pilates and acrobatics", travel: "some events in Poland", id: "2"}
		]

		return (
			<div>
				<h1>Calendar : {this.state.count}</h1>
				<button onClick={this.decrement}>-</button>
				<button onClick={this.increment}>+</button>
				<DataCreation sometime={thisyear} />
				<DataCreation sometime={nextyear} />
				<DataCreation sometime={theyearafter} />
			</div>);
	}
}

ReactDOM.render(
	<AppComponent />,
	document.getElementById("root")
	);










