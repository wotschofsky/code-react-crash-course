import { useState } from 'react';
import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import HomePage from './routes/Home';

function App() {
  const [todos, setTodos] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <HomePage
            todos={todos}
            onToggle={(index) => {
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

          <Link to="/new">Create new</Link>
        </>
      ),
    },
    {
      path: '/new',
      element: (
        <>
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

          <Link to="/">Go back</Link>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
