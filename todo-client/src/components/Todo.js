import React from 'react';

const Todo = ({ todo: { title, description, complete, _id }, deleteTodo, completeTodo }) => {
    const onDelete = () => {
        deleteTodo(_id);
    }

    const onCheck = () => {
        completeTodo(_id, !complete);
    }

    return (
        <div>
            {title}: {description}
            <input onClick={onCheck} type="checkbox" checked={complete} />
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Todo;
