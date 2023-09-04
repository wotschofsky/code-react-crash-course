function TodoItem(props) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={props.done}
          onChange={() => {
            props.onToggle()
          }}
        />
      </td>
      <td>{props.title}</td>
    </tr>
  );
}

export default TodoItem;
