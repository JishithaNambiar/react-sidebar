import React, { Component } from "react";
import logo1 from "./Dreaday1.jpg";
import Header from './header';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
          <Header /> 
          {/* <h1>DreaDay</h1> */}

          <div className="classContainer">
            <img src={logo1} className="container text-center" alt="" />
          </div>
         

            <h4>Dreasjon Reed</h4>

            <div>
              <Link to="/about" className="btn btn-info">SHOW YOUR SUPPORT</Link>
            </div>

            

        
         {/*  <footer className="footer">
            <div>
              <span className="text-muted">Drea Day</span>
            </div>
          </footer> */}
          
       {/*  <div className="rightdiv">
          <footer className="footer">
            <div>
              <span className="text-muted">Powered by Envisione Designs</span>
            </div>
          </footer>
        </div> */}

        {/*  <footer className="blockquote-footer">Powered by <cite title="Source Title">Enviosnage Designs</cite></footer> */}
      </React.Fragment>
    );
  }
}

export default Home;
