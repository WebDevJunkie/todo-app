import React, { useEffect, useState, Fragment } from "react";
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const todos = (await axios.get('http://localhost:4000/todos')).data;
        setTodos(todos);
    }

    return (
        <Fragment>
            <h1>
                Todo List
            </h1>
            { todos.map(todo => <div key={todo._id}>{todo.title}: {todo.description}</div>) }
        </Fragment>
    );
}

export default TodoList;
