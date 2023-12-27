import React from "react";

class DerivedState extends React.Component{
  static getDerivedStateFromProps(pros, state)
  {return {Show : pros.Show};}
  shouldComponentUpdate(){
    return true;
  } 
  Change(){
    this.setState({Show:" shouldComponentUpdate()"})
  }

  render() {
    return (
      <>
      
      <h1>I use {this.state.Show } to Show this Line</h1>
      <button onclick={this.Change} >Click Me</button>
      
      </>
    );
  }
}
  


export default DerivedState;
