import { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = { name: '' }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps,prevState, snapshot) {
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate(){
    return true // Prevenir re-rendering inecesarios se pone en false
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log({prevProps, prevState}) //tiene dos argumentos
  }

  render() {
    return (
      <div>
        Hi
        <input onChange={({ target: { value } }) => this.setState({ name: value })} value={this.state.name} />
      </div>
    )
  }
}

export default App;
