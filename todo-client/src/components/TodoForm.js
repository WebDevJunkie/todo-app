import React, { Fragment, useState } from "react";
import axios from "axios";

const TodoForm = (props) => {
    const [formData, setFormData] = useState({ title: '', description: '' });

    const { title, description } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/todos', { title, description });
        await props.loadNewTodos();
    }

    return (
        <Fragment>
            <h2>New Todo:</h2>
            <form onSubmit={onSubmit}>
                <label>Title</label><br />
                <input
                    value={title}
                    onChange={onChange}
                    id="title"
                    type="text" />
                <br />
                <label>Description</label><br />
                <textarea
                    value={description}
                    onChange={onChange}
                    id="description"></textarea>
                <br />
                <input type="submit" />
            </form>
        </Fragment>
    );
}

export default TodoForm;
