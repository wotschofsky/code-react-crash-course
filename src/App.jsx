import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const allTodosDone = todos.reduce((prev, curr) => prev && curr.done, true);

  return (
    <div>
      <h1>My Todos</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setInput('');
          setTodos((todos) => [
            ...todos,
            {
              title: input,
              done: false,
            },
          ]);
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button>Add</button>
      </form>

      {allTodosDone && <div>Everything&apos;s done! Good job 🤝</div>}

      <table>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={(event) => {
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
                </td>
                <td>{todo.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
