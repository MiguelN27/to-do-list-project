import React, { useState } from "react";

export function TodoList() {
	let [newTask, setNewTask] = useState("");
	let [todoList, setTodoList] = useState([
		"Wash hands",
		"Make the dinner",
		"Sleep"
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

	React.useEffect(() => {
		console.log("the list was changed to: ", todoList);
	}, [todoList]);

	return (
		<div className="bigContainer">
			<h1 className="bigTitle">TASKS FOR TODAY</h1>
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
						<li className="litask" key={i}>
							☞ {task}
							<button
								type="button"
								className="btn btn-outline-danger"
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
