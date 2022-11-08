function ListItem(props) {
  return (
    <li className="list_item">
      <p>{props.taskName}</p>
      <button onClick={() => props.deleteTask(props.taskId)}>Complete</button>
    </li>
  );
}

export default ListItem;
