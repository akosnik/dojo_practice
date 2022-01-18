import React, {useState, useReducer} from 'react'

const [name, setTodo] = useState('');
const [todos]

export default function TodoListReducer() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>TODO LIST</h1>
        <input className="form__input" type="text" name="todoInput" id="todoInput" value={todo} onChange={setTodo(e.target.value)}/>
        <button className="btn btn-primary" type="submit" value="Add" />
      </form>

    </div>
  )
}
