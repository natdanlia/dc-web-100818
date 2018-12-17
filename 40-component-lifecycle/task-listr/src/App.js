import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: []
    }
    console.warn('App constructor()')
  }

  componentDidMount(){
    console.warn('App componentDidMount()')
    fetch(`http://localhost:3000/tasks`)
    .then(res => {return res.json()})
    .then(jsonData => {
      this.setState({
        taskList: jsonData
      })
    })
  }

  componentDidUpdate(){
      console.warn(`App componentDidUpdate()`)
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    //add this task to my back end
    fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: {
        "Content-Type" :"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        text: this.state.formText,
        done: false
      })
    }).then(res => res.json())
    .then(newTask => {
      //add this task to my front end
      this.setState({
        taskList: [...this.state.taskList, newTask]
      })
    })
  }

  removeTask = (taskId) => {
    console.log(`attempting to remove task ${taskId}`)
    //remove this task from my backend
    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(data => {
      //remove this task from my frontend
      let newTaskList = this.state.taskList.filter(task => task.id !== taskId)
      this.setState({
        taskList: newTaskList
      })
    })
  }

  render() {
    console.warn('App render()')
    return (
      <div className="App">
        <Form onChange={this.onTypingChange} onSubmit={this.onAddNewTask}/>
        <TaskList tasks={this.state.taskList} onDelete={this.removeTask}/>
      </div>
    );
  }
}

export default App;
