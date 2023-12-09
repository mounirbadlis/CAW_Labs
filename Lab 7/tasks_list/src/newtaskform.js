import React from 'react';

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tasks: [''], // Initialize with an empty subtask
    };
  }

  handleInputChange = (e, index) => {
    const tasks = [...this.state.tasks];
    tasks[index] = e.target.value;
    this.setState({
      tasks,
    });
  };

  handleAddSubtask = () => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, ''],
    }), () => {
      // Callback after updating state
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: this.state.title,
      tasks: this.state.tasks.filter((task) => task.trim() !== ''), // Remove empty subtasks
    };

    // Pass the new task to the parent component (TasksList) for handling
    this.props.addTask(newTask);

    // Clear the form inputs
    this.setState({
      title: '',
      tasks: [''],
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 'max-content',
          alignContent: 'center',
          padding: '20px',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          padding: '10px',
          zIndex: 1,
          borderBottom: '0.01px solid black'
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <div style={{ display: 'flex' }}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
                name="title"
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Subtasks
              </label>
              {this.state.tasks.map((task, index) => (
                <input
                  type="text"
                  className="form-control"
                  key={index}
                  value={task}
                  onChange={(e) => this.handleInputChange(e, index)}
                />
              ))}
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleAddSubtask}
              >
                Add Subtask
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            New Task
          </button>
        </form>
      </div>
    );
  }
}

export default NewTaskForm;
