import React from 'react';
import Task from './task';
import NewTaskForm from './newtaskform';

class TasksList extends React.Component {
  mar = 150;

  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      marg: this.mar,
    };
  }

  addMargin = () => {
    this.setState((prevState) => ({
      marg: prevState.marg + 50,
    }));
  };

  // Function to delete a task by index
  deleteTask = (index) => {
    const updatedList = [...this.state.list];
    updatedList.splice(index, 1);
    this.setState({ list: updatedList });
  };

  // Function to add a new task
  addTask = (newTask) => {
    // Use the first subtask as content
    newTask.content = newTask.tasks.length > 0 ? newTask.tasks[0] : '';
    this.setState((prevState) => ({
      list: [...prevState.list, newTask],
    }));
  };

  render() {
    return (
      <div style={{ height: '100%' }}>
        <div>
          <NewTaskForm addTask={this.addTask} />
        </div>
        <div style={{}}>
          <div className="accordion" id="accordionExample">
            {this.state.list.map((element, index) => (
              <Task
                key={index}
                index={index}
                element={element}
                deleteTask={this.deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TasksList;
