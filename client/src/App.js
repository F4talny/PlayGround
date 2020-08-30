import React, { Component } from `react`;
import axios from `axios`;

class app extends Component {
  state = {
    response: {}
  };

  componentDidMouth () {
    axios.get(`/say-something`).then((res) => {
      const response= res.data;
      this.setState({response});
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Hello from the frontend!</h1>
        <h1>{this.state.response.body}</h1>
      </div>
    );
  }
}


export default App;