import ListItem from "./ListItem";

function List(props) {
  console.log("props.tasksArray", props.tasks);
  return (
    <ul>
      {props.tasks.map((task) => (
        <ListItem deleteTask={props.deleteTask} taskName={task.name} taskId={task.id} key={task.id} />
      ))}
    </ul>
  );
}

export default List;
