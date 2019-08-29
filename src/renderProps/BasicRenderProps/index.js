import React from 'react';

class Mouse extends React.Component {
    state = {x: 0, y:0}

    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }

    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          {this.props.children(this.state)}
        </div>
      )
  }
}

class BasicRenderProps extends React.Component {
  render(){
    return(
      <div className="app-container-center">
      <Mouse>
        {mouse => (
        <div style={{ height: '100%'}}>
          <div style={containerStyle}>
            <h1>The mouse position is</h1>
            <h2>({mouse.x}, {mouse.y})</h2>
          </div>
        </div>
      )}
      </Mouse>
      </div>
    )
  }
}

const containerStyle = {
  height: "400px",
  width: "400px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  border: "4px solid red"
};


export default BasicRenderProps;