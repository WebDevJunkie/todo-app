import React, { useEffect, useState, Fragment } from "react";
import axios from 'axios';
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const todos = (await axios.get('http://localhost:4000/todos')).data;
        setTodos(todos);
    }

    const deleteTodo = async (todoId) => {
        await axios.delete(`http://localhost:4000/todos/${todoId}`);
        await loadNewTodos();
    }

    const completeTodo = async (todoId, complete) => {
        await axios.put(`http://localhost:4000/todos/${todoId}`, { complete });
        await loadNewTodos();
    }

    const loadNewTodos = async () => {
        await fetchTodos();
    }

    return (
        <Fragment>
            <h1>
                Todo List
            </h1>
            { todos.map(todo => 
                <Todo key={todo._id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />) }
            <TodoForm loadNewTodos={loadNewTodos} />
        </Fragment>
    );
}

export default TodoList;
