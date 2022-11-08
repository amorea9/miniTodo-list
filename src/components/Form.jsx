function Form(props) {
  function submit(e) {
    e.preventDefault();
    props.addTask(e.target.elements.task.value);
  }

  return (
    <form onSubmit={submit}>
      <label>
        Add a task
        <input type="text" name="task"></input>
        <button>Add</button>
      </label>
    </form>
  );
}

export default Form;
