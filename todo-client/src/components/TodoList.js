import React, { useEffect, useState, Fragment } from "react";
import axios from 'axios';
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const todos = (await axios.get('http://localhost:4000/todos')).data;
        setTodos(todos);
    }

    const loadNewTodos = async () => {
        await fetchTodos();
    }

    return (
        <Fragment>
            <h1>
                Todo List
            </h1>
            { todos.map(todo => <div key={todo._id}>{todo.title}: {todo.description}</div>) }
            <TodoForm loadNewTodos={loadNewTodos} />
        </Fragment>
    );
}

export default TodoList;
