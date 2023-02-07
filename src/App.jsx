import { useState } from "react";

const initialTodos= [
  {id:1, text:'Aprender React'},
  {id:2, text:'Aprender JavaScript'},
  {id:3, text:'Aprender Vue.js'},
  {id:4, text:'Aprender Angular'},
]

const App = () => {
  const [todos,stTodos] = useState(initialTodos)

  return (
    <>
    <h1>Todo app</h1>
    <ul>
      {
        todos.map(todo=> (
          <li key={todo.id}>{todo.text}</li>
        ))
      }
    </ul>
    </>
  )

};
export default App;
