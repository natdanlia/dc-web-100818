import React, {Component} from 'react'

class Task extends Component {
  constructor(props){
    super(props)
    this.state = {
      done: props.task.done
    }
    console.warn(`Task ${props.task.id} constructor()`)
  }

  resize = () => {
    console.log('window is resizin')
  }

  componentDidMount(){
    console.warn(`Task ${this.props.task.id} componentDidMount()`)
    window.addEventListener('resize', this.resize)
  }

  componentDidUpdate(){
    console.warn(`Task ${this.props.task.id} componentDidUpdate()`)
    this.autoSave()
  }

  componentWillUnmount(){
    console.warn(`Task ${this.props.task.id} componentWillUnmount()`)
    window.removeEventListener('resize', this.resize)
  }

  checkChecked = () => {
    this.setState({
      done: !this.state.done
    })
  }

  render(){
    console.warn(`Task ${this.props.task.id} render()`)
    return(
      <div>
        <button onClick={() => {this.props.onDelete(this.props.task.id)}}>x</button>
        {this.props.task.text}
        <input type="checkbox"
        checked={this.state.done}
        onChange={this.checkChecked}/>
      </div>
    )
  }
}

export default Task
