import React from 'react'
import './App.css'
import marked from 'marked'

const initialValue = `
# Header
## Sub Header 
This is a [link](https://www.freecodecamp.com)
**Some cool bold text**
> Some block quote\n
Here is some \`code\`

\nthis is multi-line code\n\n

\`\`\`
function anotherExample (firstLine, lastLine){
  if (firstLine == "" && lastLine == "") {
    return multiLineCode;}
  }
\`\`\`

- List item 1
- List item 2
![React Logo w/ Text](https://goo.gl/Umyytc)`

class App extends React.Component {
  state = {
    input: initialValue,
    marked: ''
  }

  handleChange = e => {
    this.setState({
      input: e.target.value,
      marked : marked(e.target.value)
    })
  }

  componentDidMount = () =>{
    this.setState({
      marked : marked(this.state.input)
    })
  }

  render() {
    return (
      <div>
        <textarea
          id='editor'
          value={this.state.input}
          onChange={this.handleChange}
          defaultValue='#Header'>Default value</textarea>

        <p id='preview' 
           dangerouslySetInnerHTML= {{__html: this.state.marked}}
           ></p>

      </div>
    )
  }
}

export default App
