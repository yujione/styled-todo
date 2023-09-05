import React from 'react';
import { styled } from 'styled-components';

import TodoItem from './TodoItem';

const ListContainer = styled.ul`
	overflow-y: scroll;
	position: absolute;
	right: -17px;
	height: 500px;
	width: calc(100% + 17px);
`;

const TodoList = ({ todos, fnDel, fnChk }) => {
	return (
		<ListContainer>
			{todos.map((todo) => (
				<TodoItem todo={todo} fnDel={fnDel} fnChk={fnChk} key={todo.id} />
			))}
		</ListContainer>
	);
};

export default TodoList;
