class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nBy *[Angelo Palmieri](https://angelopalmieri.com)*'
    }
  }
  
  handleChange(event) {
    this.setState({ 
      markdown: event.target.value 
    });
  }
    
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-xs-6">
          <h1><a href="https://en.wikipedia.org/wiki/Markdown" target="_blank">Markdown</a></h1>
          <textarea onChange={() => this.handleChange(event)} value={this.state.markdown} rows="25" style={{width: "400px"}} />
        </div>
        <div className="col-md-6 col-xs-6">
          <h1>Preview</h1>
          <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('render-target')
);