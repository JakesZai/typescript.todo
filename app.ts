var container = document.getElementById('container');

var todo = {
	id: 123,
	name: 'Pick up drycleaning',
	completed: true
}

container.innerHTML = `
	<div todo="${todo.id}" class="todo-container">
		<div class="${todo.completed ? "" : "hidden"} primary text-primary">
			<span>${todo.name}</span>
		</div>
	</div>
`;