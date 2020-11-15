import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import edele from './fixed logo example.png';
import img6278 from './IMG_6278.jpg';
import heat from './9082575_heart (2).png';
import mary from './FB_IMG_1601691929258.jpg';
import face from './Untitled-2-01_2_1_1_1_1_1_2_1.png';
import cc from './Screenshot_20201002-231437_Instagram.jpg';
import smoosh from './Screenshot_20201003-231223_Instagram.jpg';
import credit from './crs - 1.png';
import crown from './CROWNBLACK2.png';
import amelia from './Screenshot_20201008-002034_Drive.jpg';

const About = () => {
  return (
    <div>
      <Header />
      {/* <h2>BECAUSE IT STILL TAKES A VILLAGE:</h2> */}
      <div className="card text-centre">
        <div className="card-header">BECAUSE IT STILL TAKES A VILLAGE:</div>
        <div className="card-title">What is Drea Day?</div>
          <div className="card-body">
          
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
      <div className="container1">
        <img src={edele} alt="Edele image" height={80} width={80} />
        <img src={img6278} alt="6278 image" height={80} width={80} />
        <img src={heat} alt="Heat image" height={80} width={80} />
        <img src={mary} alt="Mary image" height={80} width={80} />
        <img src={face} alt="Face image" height={80} width={80} />
      </div>

      <div className="container2">
        <img src={cc} alt="Cc image" height={80} width={80} />
        <img src={smoosh} alt="Smoosh image" height={80} width={80} />
        <img src={credit} alt="Credit image" height={80} width={80} />
        <img src={crown} alt="Crown image" height={80} width={80} />
        <img src={amelia} alt="Amelia image" height={80} width={80} />

      </div>
      
      
      <Footer />
    </div>
  );
};

export default About;
