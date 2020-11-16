import React, { Component } from "react";
import Header from "./header";
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
import drea from './Dreaday1.jpg';
import toolate from './Too Late - Cover - Sized.png';

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
      <a href="https://edelenyc.com/">
        <img src={edele} alt="Edele img" height={100} width={100} />
      </a>
      <a href="https://www.etsy.com/shop/AmericasStepdaddy">
        <img src={img6278} alt="6278 img" height={100} width={100} />
      </a>
      <a href="https://www.uncommongoods.com/product/sweet-and-savory-hot-sauce-duo">
        <img src={heat} alt="Heat img" height={100} width={100} />
      </a>
      <a href="https://www.marykay.com/ERivers">
        <img src={mary} alt="Mary img" height={100} width={100} />
      </a>
      <a href="https://www.instagram.com/wowbeauty317/">
        <img src={face} alt="Face img" height={100} width={100} />
      </a>
      </div>

      <div className="container2">
      <a href="https://www.instagram.com/culicovers/">
        <img src={cc} alt="Cc img" height={100} width={100} />
      </a>
      <a href="https://www.amazon.com/dp/B01BA5NFAU/ref=cm_sw_r_cp_awdb_btf_t1_pStEFbEMCARYM">
        <img src={smoosh} alt="Smoosh img" height={100} width={100} />
      </a>
      <a href="https://www.financialeducationservices.com/default.aspx?rid=ERivers3">
        <img src={credit} alt="Credit img" height={100} width={100} />
      </a>
      <a href="https://livefreedombrand.com/">
        <img src={crown} alt="Crown img" height={100} width={100} />
      </a>
      <a href="https://ameliasbread.com/">
        <img src={amelia} alt="Amelia img" height={100} width={100} />
      </a>
      <a href="https://music.apple.com/us/album/too-late-single/1540121306?ls">
        <img src={toolate} alt="Toolate img" height={100} width={100} />
      </a>

      </div>
      
    </div>
  );
};

export default About;
