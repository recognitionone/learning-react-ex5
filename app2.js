function TodoList({todos, onSetTodoStatus}) {
	return(
		<ul>
			{todos.map(todo =>
					<li key={todo.id}>
						<label>
							<input type="checkbox" checked={todo.isCompleted} onChange={e => onSetTodoStatus(todo, e.target.checked)} />
							{todo.isCompleted
								? <del>{todo.text}</del>
								: todo.text}
						</label>
					</li>
				)}
		</ul>
		);
}

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this._onSubmit = this._onSubmit.bind(this);
	}

	render() {
		return (
			<form onSubmit={this._onSubmit}>
				<input type="text" ref={input => this._todoText = input} />
				<button>Add Todo</button>
			</form>
			);
	}

	focusInput() {
		this._todoText.focus();
	}

	_onSubmit(e) {
		e.preventDefault();
		const todoText = this._todoText.value.trim();
		if (todoText.length == 0)
			return;

		this._todoText.value = "";
		this.props.onAddTodo(todoText);
	}
}

TodoForm.propTypes = {
	onAddTodo: React.PropTypes.func.isRequired
};

class AppComponent extends React.Component {
	constructor(props) {
		super(props);

		this._nextTodoId = 1;
		this.state = {
			filter: { showCompleted: true },
			todos: [
				{id: this._nextTodoId++, text: "One", isCompleted: false},
				{id: this._nextTodoId++, text: "Two", isCompleted: false},
				{id: this._nextTodoId++, text: "Three", isCompleted: true},
				{id: this._nextTodoId++, text: "Four", isCompleted: true},
				{id: this._nextTodoId++, text: "Five", isCompleted: false},
				{id: this._nextTodoId++, text: "Six", isCompleted: false},
			]
		};

		this._onShowCompletedChanged = this._onShowCompletedChanged.bind(this);
		this._setTodoStatus = this._setTodoStatus.bind(this);
		this._onAddTodo = this._onAddTodo.bind(this);
	}


	componentDidMount() {
		this._todoForm.focusInput();
	}

	render() {
		const {filter, todos} = this.state;
		const filteredTodos = filter.showCompleted
			? todos
			: todos.filter(todo => !todo.isCompleted);

		return (
			<div>
				<h2>My todo list</h2>
				<label>
					Show Completed
					<input type="checkbox" checked={filter.showCompleted} onChange={this._onShowCompletedChanged} />
				</label>
				<TodoList todos={filteredTodos} onSetTodoStatus={this._setTodoStatus} />
				<TodoForm onAddTodo={this._onAddTodo} ref={form => this._todoForm = form} />
			</div>
			);
	}

	_onAddTodo(text) {
		this.setState({
			todos: this.state.todos.concat({
				id: this._nextTodoId++,
				text,
				isCompleted: false
			})
		});
	}

	_setTodoStatus(todo, isCompleted) {
		const {todos} = this.state;
		const newTodos = todos.map(oldTodo => {
			if (oldTodo.id !== todo.id)
				return oldTodo;

			return Object.assign({}, oldTodo, {isCompleted});
		});

		this.setState({ todos: newTodos });
	}

	_onShowCompletedChanged(e) {
		this.setState({
			filter: {showCompleted: e.target.checked}
		});
	}
}


ReactDOM.render(<AppComponent />, document.getElementById("root"));

// ReactDOM.render(<AppComponent />, document.getElementById("root"));
