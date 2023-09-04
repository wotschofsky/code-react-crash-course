import { useState } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const allTodosDone = todos.reduce((prev, curr) => prev && curr.done, true);

  return (
    <div>
      <h1>My Todos</h1>

      <TodoForm
        onAdd={(title) => {
          setTodos((todos) => [
            ...todos,
            {
              title: title,
              done: false,
            },
          ]);
        }}
      />

      {allTodosDone && <div>Everything&apos;s done! Good job 🤝</div>}

      <table>
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem
              title={todo.title}
              done={todo.done}
              onToggle={() => {
                setTodos((todos) =>
                  todos.map((todo, i) => {
                    if (index === i) {
                      return {
                        ...todo,
                        done: !todo.done,
                      };
                    }

                    return todo;
                  })
                );
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
