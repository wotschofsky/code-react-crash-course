import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm(props) {
  const [input, setInput] = useState('');

  return (
    <form
      style={{ marginBottom: '1rem' }}
      onSubmit={(event) => {
        event.preventDefault();
        setInput('');
        props.onAdd(input);
      }}
    >
      <input
        className={styles.test}
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

export default TodoForm;
