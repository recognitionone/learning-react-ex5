
// function TableCreation (props) {

// 	return(
// 		<div>
// 			<table>
// 				<thead>
// 					<tr>
// 						<th>Month</th>
// 						<th>Work</th>
// 						<th>Exercise</th>
// 						<th>Travel</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					<tr>
// 						<th><button>{props.object.month}</button></th>
// 						<th>{props.object.work}</th>
// 						<th>{props.object.exercise}</th>
// 						<th>{props.object.travel}</th>
// 					</tr>
// 				</tbody>
// 			</table>
// 		</div>
// 		);
// }

// function DataCreation(props) {
// 	return(
// 			<div>
// 				{props.sometime.map(x => <TableCreation object={x} key={x.id} />)}
// 			</div>
// 		);
// }


// class AppComponent extends React.Component {
	


// 	constructor(props) {
// 		super(props);

// 		this._nextToDoId = 1;
// 		this._count = 1;
// 		this.state = {
			
// 			title: "Hello world",
// 			filter : {showCompleted: true},
// 			todos: [
// 				{id: this._nextToDoId++, text: "Hey!", isCompleted: false},
// 				{id: this._nextToDoId++, text: "Stuff", isCompleted: true},
// 				{id: this._nextToDoId++, text: "Things", isCompleted: true},
// 				{id: this._nextToDoId++, text: "Something", isCompleted: false}
// 			],

// 			thisyear: [
// 				{month: this.count + 0, work: "ads", exercise: "jogging", travel: "rogozno", isCompleted: true, id: "0"},
// 				{month: this.count + 1, work: "open source", exercise: "pilates", travel: "none", isCompleted: true, id: "1"},
// 				{month: this.count + 2, work: "trainee", exercise: "climbing", travel: "Poznan", isCompleted: true, id: "2"}
// 			],
		
// 			nextyear: [
// 				{month: this.count + 3, work: "junior dev", exercise: "acrobatics", travel: "Czech", isCompleted: true, id: "0"},
// 				{month: this.count + 4, work: "advanced junior", exercise: "advanced climbing", travel: "Berlin", isCompleted: true, id: "1"},
// 				{month: this.count + 5, work: "medium", exercise: "diving", travel: "London", isCompleted: true, id: "2"}
// 			],

// 			theyearafter: [
// 				{month: this.count + 6, work: "ads in games and learning", exercise: "jogging", travel: "rogozno", isCompleted: true, id: "0"},
// 				{month: this.count + 7, work: "work with some open source projects", exercise: "pilates and climbing", travel: "none", isCompleted: true, id: "1"},
// 				{month: this.count + 8, work: "training as a react developer", exercise: "pilates and acrobatics", travel: "some events in Poland", isCompleted: true, id: "2"}
// 			]
// 		};
// 		this.increment = this.increment.bind(this);
// 		this.decrement = this.decrement.bind(this);
// 		this._onShowCompletedChanged = this._onShowCompletedChanged.bind(this);

// 	}

// 	decrement() {
// 		const {count} = this.state;
// 		this.setState({count: count - 1});
// 	}
	
// 	increment() {
// 		const {count} = this.state;
// 		this.setState({count: count + 1});
// 	}

// 	_onShowCompletedChanged(e) {
// 		this.setState({
// 			filter: {showCompleted: e.target.checked}
// 		})

// 	}

// 	render() {
// 		// const {count, title} = this.state;

// 		const {filter} = this.state;
// 		// const filteredTodos = filter.showCompleted ? todos : todos.filter(todo => !todo.isCompleted);

// 		return (
// 			<div>
// 				<h1>Calendar : {this.state.count}</h1>
// 				<button onClick={this.decrement}>-</button>
// 				<button onClick={this.increment}>+</button>
// 				<br/>
// 				<label>
// 					Show Completed
// 					<input 
// 						type="checkbox" 
// 						checked={filter.showCompleted}
// 						onChange={this._onShowCompletedChanged}
// 					/>
// 				</label>
// 				<DataCreation sometime={thisyear} todos={todos}/>
// 				<DataCreation sometime={nextyear} todos={todos}/>
// 				<DataCreation sometime={theyearafter} todos={todos}/>
// 			</div>);
// 	}
// }

// ReactDOM.render(
// 	<AppComponent />,
// 	document.getElementById("root")
// 	);


function TodoList({smth, shopping}) {
    return (
            <ul>
                {smth.map(todo =>
                    <li key={todo.id}>
                        {todo.isCompleted ? <del>{todo.text}</del> : todo.text}
                    </li>)}
                 <table>
	            	{shopping.map(shoppings =>
						<tr key={shoppings.id}>
							<td>{shoppings.text}</td>
							<td><input type="checkbox" 
				            checked={shoppings.isCompleted}
				            /></td>
	            		</tr>)}
	            </table>
            </ul>
           
        );
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this._nextTodoId = 1;
    this.state = {
      filter: { showCompleted: false },
      todos: [
        {id: "0", text: "Heya!!", isCompleted: false},
        {id: "1", text: "stuff", isCompleted: true},
        {id: "2", text: "things", isCompleted: true},
        {id: "3", text: "anything", isCompleted: false}
      ],

      shoppings: [
        {id: "4", text: "my", isCompleted: false},
        {id: "5", text: "name", isCompleted: true},
        {id: "6", text: "is", isCompleted: true},
        {id: "7", text: "tyler", isCompleted: false}
      ]
    };

    this._onShowCompletedChanged = this._onShowCompletedChanged.bind(this);
  }

  render() {
    const {filter, todos, shoppings} = this.state;
    const filteredTodos = filter.showCompleted
        ? todos
        : todos.filter(todo => !todo.isCompleted);
    // const {shoppings} = this.state;

   

    return (
      <div >
        <h2>Ok, what if we crate our todolist here?</h2>
        <label>
            Show Completed
            <input type="checkbox" 
            checked={filter.showCompleted} 
            onChange={this._onShowCompletedChanged} />
        </label>

        <TodoList smth={filteredTodos} shopping={shoppings}/>

      </div>
    );
  }

   _onShowCompletedChanged(e) {
        this.setState({
            filter: {showCompleted: e.target.checked}
        });
    }
}

ReactDOM.render(
	<AppComponent />,
	document.getElementById("root")
	);








