import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';

class App extends React.Component {
  render() {
    return (


        <Board/>

    );
  }
}




class Board extends React.Component
{

  renderSquare = (i) => <Square num={i}/>

  render(){
      return(
        <div className={"flex-grid"}>
          <div className={"flex-container"}>
              <Square />
          </div>
        </div>

    );
  }
}

class Square extends React.Component
{

    constructor(props)
    {
      super(props);
      this.state = {hasPiece: false}
    }



    render()
    {

        return(
          <button className="square" onClick={ () => this.setState({hasPiece:true})}>
              {this.state.hasPiece ? <div></div : null}
          </button>
      );
    }
}


function dot(props)
{
  return <div className="edot"></div>
}



export default App;
