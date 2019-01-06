import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';

class App extends Component {
  render() {
    return (


        <Board/>

    );
  }
}


function Board(props)
{
  return(
    <div className={"flex-grid"}>
      <div className={"flex-container"}>
      <div className={"odd-square"}>
            <span className={"dot"}></span>
      </div>
      <div className={"even-square"}>

      </div>
      <div className={"odd-square"}>
            <span className={"dot"}></span>
      </div>
      <div className={"even-square"}>

      </div>
      <div className={"odd-square"}>
        <span className={"dot"}></span>
      </div>
      <div className={"even-square"}>

      </div>
      <div className={"odd-square"}>
            <span className={"dot"}></span>
      </div>
      <div className={"even-square"}>

      </div>

      <div className={"even-square"}>

      </div>
      <div className={"odd-square"}>
            <span className={"dot"}></span>
      </div>
      <div className={"even-square"}>

      </div>
      <div className={"odd-square"}>
          <span className={"dot"}></span>
      </div>
      <div className={"even-square"}>

      </div>
      <div className={"odd-square"}>
            <span className={"dot"}></span>
      </div>
      <div className={"even-square"}>

      </div>
      <div className={"odd-square"}>
              <span className={"dot"}></span>
      </div>

          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>

          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>

          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>

          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>
          <div className={"even-square"}/>
          <div className={"odd-square"}/>

          <div className={"odd-square"}>
              <span className={"edot"}></span>
          </div>
          <div className={"even-square"}>

          </div>
          <div className={"odd-square"}>
              <span className={"edot"}></span>
          </div>
          <div className={"even-square"}>

          </div>
          <div className={"odd-square"}>
                <span className={"edot"}></span>
          </div>
          <div className={"even-square"}>

          </div>
          <div className={"odd-square"}>
                <span className={"edot"}></span>
          </div>
          <div className={"even-square"}>

          </div>

          <div className={"even-square"}>

          </div>
          <div className={"odd-square"}>
                <span className={"edot"}></span>
          </div>
          <div className={"even-square"}>

          </div>
          <div className={"odd-square"}>
                <span className={"edot"}></span>
          </div>
          <div className={"even-square"}>

          </div>
          <div className={"odd-square"}>
                <span className={"edot"}></span>
          </div>
          <div className={"even-square"}>

          </div>
          <div className={"odd-square"}>
                <span className={"edot"}></span>
          </div>

      </div>
    </div>

);
}



export default App;
