import { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setInput('');
        props.onAdd(input)
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
  );
}

export default TodoForm
