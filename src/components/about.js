import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";

const About = () => {
  return (
    <div>
      <Header />
      {/* <h2>BECAUSE IT STILL TAKES A VILLAGE:</h2> */}
      <div className="card text-centre">
        <div className="card-header">BECAUSE IT STILL TAKES A VILLAGE:</div>
        <div className="card-body">
          <h5 className="card-title mt-5">What is Drea Day?</h5>
          
          
          <span className="text-muted">
            On May 6th, Dreasjon "Sean" Reed was murdered by IMPD Officer
            De'Joure Mercer while he was streaming live via Facebook. Multiple
            eyewitnesses have come forward and have sworn under oath that the
            version of events that had been reported by IMPD was inaccurate. To
            help the family raise money to pay for the multiple experts needed,
            businesses across the globe have joined together for Drea Day. On
            the 6th of every month, 10% of our partners' sales will be donated
            to Dreasjon Reed's GoFundMe.
          </span>
        </div>
      </div>
      <h3>Our Partners</h3>
      <Footer />
    </div>
  );
};

export default About;
