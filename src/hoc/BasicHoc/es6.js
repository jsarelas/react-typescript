import React from 'react';

const withMouse = (Component) => {
  return class extends React.Component{
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
          <Component mouse={this.state} />
        </div>
      )
    }
  }
}

class HOCES6 extends React.Component {
  render(){
    const {x,y} = this.props.mouse

    return(
      <div className="app-container-center" style={{ height: '100%'}}>
        <div style={style.container}>
          <h1>The mouse position is</h1>
          <h2>({x}, {y})</h2>
        </div>
      </div>

    )
  }
}

const style = {
  container: {
  height: "400px",
  width: "400px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  border: "4px solid red"
  } 
};

export default withMouse(HOCES6);
