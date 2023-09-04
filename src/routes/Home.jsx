import TodoItem from '../components/TodoItem';

function HomePage({ todos, onToggle }) {
  const allTodosDone = todos.reduce((prev, curr) => prev && curr.done, true);

  return (
    <>
      {allTodosDone && <div>Everything&apos;s done! Good job 🤝</div>}

      <table>
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem
              title={todo.title}
              done={todo.done}
              onToggle={() => {
                onToggle(index)
              }}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default HomePage;
