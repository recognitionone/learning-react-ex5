
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
						<th>Is completed</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th><button>{props.object.month}</button></th>
						<th>{props.object.work}</th>
						<th>{props.object.exercise}</th>
						<th>{props.object.travel}</th>
						<td><input type="checkbox" 
				            checked={props.object.isCompleted}
				            /></td>
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


function TodoList({smth, shopping, onSetTodoStatus}) {
    return (
            <ul>
                {smth.map(todo =>
                    <li key={todo.id}>
                    	<label>
                    		<input type="checkbox" checked={todo.isCompleted} onChange={e => onSetTodoStatus(todo, e.target.checked)} />
                    		{todo.isCompleted ? <del>{todo.text}</del> : todo.text}</label>
                        
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
      ],

      thisyear: [
		{month: "sep", work: "ads", exercise: "jogging", travel: "rogozno", isCompleted: true, id: "0"},
		{month: "oct", work: "open source", exercise: "pilates", travel: "none", isCompleted: true, id: "1"},
		{month: "dec", work: "trainee", exercise: "climbing", travel: "Poznan", isCompleted: true, id: "2"}
		]
    };

    this._onShowCompletedChanged = this._onShowCompletedChanged.bind(this);
    this._setTodoStatus = this._setTodoStatus.bind(this);
  }

  render() {
    const {filter, todos, shoppings, thisyear} = this.state;
    const filteredTodos = filter.showCompleted
        ? todos
        : todos.filter(todo => !todo.isCompleted);   

    return (
      <div >
        <h2>Ok, what if we crate our todolist here?</h2>
        <label>
            Show Completed
            <input type="checkbox" 
            checked={filter.showCompleted} 
            onChange={this._onShowCompletedChanged} />
        </label>

        <TodoList smth={filteredTodos} shopping={shoppings} onSetTodoStatus={this._setTodoStatus}/>
        <DataCreation sometime={thisyear} />

      </div>
    );
  }
	_setTodoStatus(todo, isComplete) {
		const {todos} = this.state;
		const newTodos = todos.map(oldTodo => {
				if (oldTodo.id !== todo.id)
					return oldTodo;

				return Object.assign({}, oldTodo, {isCompleted: isCompleted});
			});
		
		this.setState({ todos: newTodos });
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








