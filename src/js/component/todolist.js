import React, { useState } from "react";

export function TodoList() {
	let [newTask, setNewTask] = useState("");
	let [todoList, setTodoList] = useState([
		"wash hands",
		"make the dinner",
		"sleep"
	]);

	const handleKeyPress = event => {
		if (event.key === "Enter") {
			let newArr = [...todoList];
			newArr.push(newTask);
			setNewTask("");
			setTodoList(newArr);
		}
	};

	const deleteTodo = event => {
		let newArr = [...todoList];
		newArr.splice(event.target.value, 1);
		setNewTask("");
		setTodoList(newArr);
	};

	return (
		<div>
			<input
				type="text"
				id="newtask"
				value={newTask}
				onKeyDown={handleKeyPress}
				onChange={event => {
					setNewTask(event.target.value);
				}}></input>
			<ul className="allTask">
				{todoList.map((task, i) => {
					return (
						<li className="task" key={i}>
							{task}
							<button
								className="button"
								value={i}
								onClick={deleteTodo}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
