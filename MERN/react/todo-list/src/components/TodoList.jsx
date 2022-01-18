import React, {useState} from 'react'


const TodoList = () => {

  const [todo, setTodo] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let todoObj = {
      todo: todo,
      isComplete: isComplete
    };
    let newTodoList = [...todoList, todoObj];
    setTodoList(newTodoList);
    setTodo('');
  }

  const toggleComplete = (i) => {
    let [...copyTodoList] = todoList;
    copyTodoList[i].isComplete = !copyTodoList[i].isComplete;
    setTodoList(copyTodoList);
  }

  const deleteTodo = (i) => {
    let copyTodoList = todoList.filter((todo, idx) =>  idx != i);
    setTodoList(copyTodoList);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input className="form__input" type="text" name="todo" id="todoInput" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
          <input className="btn btn-primary" type="submit" value="Add" />
        </div>
      </form>
      <div className="todos">
      {
        todoList.map((todoItem, i) => {
          return (
            <>
              <span key={i} style={{textDecoration: todoItem.isComplete? 'line-through': 'none'}}>{todoItem.todo}</span>
              <input type="checkbox" name="isTodoComplete" id="todoCheck" onClick={()=>toggleComplete(i)}/>
              <input className="delete btn btn-light" type="button" value="Delete" onClick={()=>deleteTodo(i)}/>
            </>
              )
            })
          }
      </div>
    </div>
  )
}

export default TodoList;

