import React, { useRef, useState } from 'react';
import TodoHead from './components/TodoHead';
import TodoBody from '../components/TodoBody';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

const initialData = [
	{ id: 1, title: '리액트 복습 완전정복', done: false },
	{ id: 2, title: '방청소 - 물걸레질 포함', done: false },
	{ id: 3, title: '포트폴리오 계획서 작성', done: true },
];

const App = () => {
	const [todos, setTodos] = useState(initialData);
	const nextId = useRef(4);

	//추가함수
	const fnAdd = (plan) => {
		// alert(plan);

		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{
					id: nextId.current,
					title: plan,
					done: false,
				},
			];
		});

		nextId.current++;
	};

	//삭제함수
	const fnDel = (id) => {
		// alert('id = ' + id);
		setTodos((prevTodos) =>
			prevTodos.filter((todo) => {
				return todo.id !== id;
			})
		);
	};

	//체크함수
	const fnChk = (id) => {
		// alert('id = ' + id);
		setTodos((prevTodos) => {
			return prevTodos.map((todo) =>
				todo.id !== id
					? todo
					: {
							...todo,
							done: !todo.done,
					  }
			);
		});
	};

	// const [todos] = useState;
	return (
		<>
			<TodoHead>오늘할일</TodoHead>
			<TodoBody>
				<TodoList todos={todos} fnDel={fnDel} fnChk={fnChk} />
				<TodoInsert fnAdd={fnAdd} />
			</TodoBody>
		</>
	);
};

export default App;
