import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import "./_app.js"

class Home extends React.Component {

  toggleActive() {
    document.getElementById("servicesDrop").classList.toggle("active");
  }

  scrollDown() {
    window.scrollTo({
      top:1000,
      behavior:'smooth'
    });
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>FireLink Tech Inc.</title>
          <link rel="icon" href="favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Rokkitt:wght@400;800&display=swap" rel="stylesheet"></link>
        </Head>

        <div className="navigationBar">
          <img src="customLogo.png"></img>
          <div id="servicesDrop" className="dropdown" onClick={e => this.toggleActive()}>
            <button><b>SERVICES</b>
              <img src="down-arrow.png" className="downArrow"></img>
            </button> 
            <div className="dropdown-content">
              <Link href="/BurglarAlarms">
                <a href="#"><b>Burglar Alarm Systems</b></a>
              </Link>
              <Link href="/FireAlarms">
                <a href="#"><b>Fire Alarm Systems</b></a>
              </Link>
              <Link href="/MassSystems">
                <a href="#"><b>Mass Notification Systems</b></a>
              </Link>
            </div>
          </div> 
          <button><a href="https://www.kidde-esfire.com/" target="_blank"><b>PRODUCTS</b></a></button> 
          <button onClick={e => this.scrollDown()}><b>CONTACT US</b></button> 
        </div>

        <div className="introDiv">
          <div className="introContainer">
            <p className="introHeader">The best customer service is what we always strive for.</p>
            <p className="introSub">Fire Alarm • Security Systems • Access Control • Video Surveillance • Area of Refuge Systems</p>
            <br/>
            <p className="introBody">FIRE-LINK Technologies Inc. is an independently owned and operated home-grown company. When Enrique Perez, President, started the company in 2013, 
              he assembled a team of engineers, technicians and installers to provide high quality work. Beginning from day one, he cared about providing the 
              best protection systems available with the highest quality monitoring and service. We have never lost focus. Customer service is still our number one priority.</p>
          </div>
          <img className="menuImg" src="contractors.png"></img>
        </div>

        <div className="serviceDiv">
          <img className="serviceImg" src="alarms.png"></img>
          <div className="serviceContainer">
              <p className="serviceHeader">Our Services</p>
              <br/>
              <p className="serviceSub">Burglar Alarm Systems</p>
              <p className="serviceBody">Once you’ve designed your system and selected your financing, our highly trained technicians can come 
                out and install your new security system.</p>
              <br/>
              <p className="serviceSub">Fire Alarm Systems</p>
              <p className="serviceBody">Our alarms can quickly alert your local fire department and send you a text or alert as soon as fire 
                is detected in your home.</p>
              <br/>
              <p className="serviceSub">Mass Notification Systems</p>
              <p className="serviceBody">For any important or time-sensitive alert, our systems allow you to engage in real-time interactions 
              with any size audience.</p>
            </div>
        </div>

        <div className="contactDiv">
          <p className="contactHeader">Contact Us</p>
          <div style={{paddingLeft:"100px"}} className="contactContainer">
            <p className="contactBody"><img className="contactImg" src="phone.png">
            </img>(786) 449-4354</p>
            <p className="contactBody"><img className="contactImg" src="envelope.png">
            </img>eperez@firelinktech.com</p>
          </div>
          <div style={{width:"270px", paddingLeft:"100px"}} className="contactContainer">
            <p className="contactBody"><img style={{width:"25px"}} className="contactImg" src="marker.png">
            </img>10277 NW 128th Terrace, Hialeah Gardens, FL 33018</p>
            <p className="contactBody"><img style={{width:"29px"}} className="contactImg" src="state-license.png">
            </img>EF20001178</p>
          </div>
        </div>

        <footer>
            <img src="customLogo.png" alt="Vercel Logo" className="logo" />
        </footer>
      </div>
    )
  }
}

export default Home;
