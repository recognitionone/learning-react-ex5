
function TableCreation(props) {
	console.log(props.object)
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
						<th>{props.object.month}</th>
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
	const thisyear = [
	{month: "august", work: "ads in games and learning", exercise: "jogging", travel: "rogozno", id: "0"},
	{month: "september", work: "work with some open source projects", exercise: "pilates and climbing", travel: "none", id: "1"},
	{month: "august", work: "training as a react developer", exercise: "pilates and acrobatics", travel: "some events in Poland", id: "2"}
	]
	
	const nextyear = [
	{month: "august", work: "ads in games and learning", exercise: "jogging", travel: "rogozno", id: "0"},
	{month: "september", work: "work with some open source projects", exercise: "pilates and climbing", travel: "none", id: "1"},
	{month: "august", work: "training as a react developer", exercise: "pilates and acrobatics", travel: "some events in Poland", id: "2"}
	]

	const theyearafter = [
	{month: "august", work: "ads in games and learning", exercise: "jogging", travel: "rogozno", id: "0"},
	{month: "september", work: "work with some open source projects", exercise: "pilates and climbing", travel: "none", id: "1"},
	{month: "august", work: "training as a react developer", exercise: "pilates and acrobatics", travel: "some events in Poland", id: "2"}
	]

	return(
		<div>
			<h1>Hello again</h1>
			<DataCreation sometime={thisyear} />
			<DataCreation sometime={nextyear} />
			<DataCreation sometime={theyearafter} />
		</div>
		);
}

ReactDOM.render(
	<AppCreation />,
	document.getElementById("root")
	);