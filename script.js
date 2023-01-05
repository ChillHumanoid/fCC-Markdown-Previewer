import { marked } from "https://cdn.skypack.dev/marked@4.0.16"

const initialState = `
# Welcome to my React Markdown Previewer, I hope you enjoy!
- - - -
## This is a sub-heading...
- - - -
This is a paragraph
 - - - - 
Look at this **bolded text**

Or _italic_

Or... wait for it... **_both!_**

You could even go crazy ~~crossing stuff out~~.
- - - - 
### Link

Check out my [Codepen](https://codepen.io/chillhumanoid) and [Github](https://github.com/ChillHumanoid) while you're here!
- - - -
### Blockquote

> Experience is the name everyone gives to their mistakes.
- - - - 
### Code Block

        <body>
            <p>This is a paragraph within a code block</p>
        </body>

- - - -
### Inline Code

Some inline code: \`<p> Hello World </p>\`
- - - -
### List

- First item
- Second item 
- - - - 
![Code](https://cdn-icons-png.flaticon.com/512/2920/2920277.png)

`;

class App extends React.Component {
  state = {
    text: initialState
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { text } = this.state;
    
    const markdown = marked(text, { breaks: true });
    
    return(
      <div>
        <h2 id="title" className="text-center m-4">Markdown Previewer</h2>
        <div className="row">
          <div className="col-6">
            <h6 className="text-center">Enter your markdown here:</h6>
            <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange}/>
          </div>
          
          <div className="col-6">
            <h6 className="text-center">See the result:</h6>
            <div className="preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}} id="preview" />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));