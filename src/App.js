import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    input: ''
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div>

        <textarea
          id='editor'
          value={this.state.input}
          onChange={this.handleChange}></textarea>

        <p id='preview'>{this.state.input}</p>

      </div>
    )
  }
}

export default App
