import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";

const initialTodos= [
  {id:1, text:'Aprender React'},
  {id:2, text:'Aprender JavaScript'},
  {id:3, text:'Aprender Vue.js'},
  {id:4, text:'Aprender Angular'},
]

const App = () => {
  const [todos,setTodos] = useState(initialTodos)

  return (
    <DragDropContext>
      <h1>Todo app</h1>
      <Droppable droppableId="todos">
        {
          (DroppableProvider) => (
            <ul 
              ref={DroppableProvider.innerRef} 
              {...DroppableProvider.droppableProps}
            >
              {
                todos.map( ( todo, index )=> (
                  <Draggable 
                    index={index}
                    key={todo.id} 
                    draggableId={`${todo.id}`}
                  >
                    {
                      (draggableProvider) => (
                        <li 
                          ref={draggableProvider.innerRef}
                          {...draggableProvider.dragHandleProps}
                          {...draggableProvider.draggableProps}
                        >
                          {todo.text}
                        </li>
                      )
                    }
                  </Draggable>
                ))
              }
              
              {DroppableProvider.placeholder}
              
            </ul>
          )
        }
      </Droppable>
    </DragDropContext>
  )

};
export default App;
