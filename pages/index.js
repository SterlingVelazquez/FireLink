import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import "./_app.js"

class Home extends React.Component {

  toggleActive() {
    document.getElementById("servicesDrop").classList.toggle("active");
  }

  toggleSideActive() {
    document.getElementById("servicesSideDrop").classList.toggle("active");
  }

  openSideNav() {
    if (window.innerWidth < "722") {
      document.getElementById("navbar").style.top = "-160px";
      document.getElementById("sidenav").style.right = "0";
      document.getElementById("menumoverfix").style.left = "82%";
    } else {
      document.getElementById("navbar").style.top = "-110px";
      document.getElementById("sidenav").style.right = "0";
      document.getElementById("menumoverfix").style.left = "82%";
    }
  }

  closeSideDiv() {
    if (window.innerWidth < "722") {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("sidenav").style.right = "-310px";
      document.getElementById("menumoverfix").style.left = "100%";
    } else {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("sidenav").style.right = "-310px";
      document.getElementById("menumoverfix").style.left = "100%";
    }
  }
  
  openAbout() {
    document.getElementById("openabout").classList.toggle("active");
    if (document.getElementById("openabout").classList[1] === "active") {
      document.getElementById("smallsubintro").style.padding = "0 3rem 2rem 3rem";
      document.getElementById("smallsubintro").style.height = "auto";
    } else {
      document.getElementById("smallsubintro").style.padding = "0";
      document.getElementById("smallsubintro").style.height = "0";
    }
  }

  scrollDown() {
    window.scrollTo({
      top:100000,
      behavior:'smooth'
    });
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>FireLink Tech Inc.</title>
          <link rel="icon" href="favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Rokkitt:wght@400;800&display=swap" rel="stylesheet"></link>
        </Head>

        <div id="navbar" className="navigationBar">
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
          <Link href="/Products">
            <button><b>PRODUCTS</b></button>
          </Link>
          <button onClick={e => this.scrollDown()}><b>CONTACT US</b></button> 
          <button className="menuBtn" onClick={e => this.openSideNav()}>Menu<img className="menuBtnImg" src="menu.png"></img></button>
        </div>

        <div id="sidenav" className="sideNavBar">
          <img src="customLogo.png"></img>
          <div id="servicesSideDrop" className="sideDropdown" onClick={e => this.toggleSideActive()}>
            <button style={{top:"50px"}}><b>SERVICES</b></button> 
            <div className="sideDropdown-content">
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
          <Link href="/Products">
            <button><b>PRODUCTS</b></button>
          </Link>
          <button style={{top:"10px"}} onClick={e => this.scrollDown()}><b>CONTACT US</b></button> 
          <button onClick={e => this.closeSideDiv()} className="menuMover" id="menumover"><img className="moverImg" src="blue-arrow.png"></img></button>
        </div>

        <button onClick={e => this.closeSideDiv()} className="menuMoverFix" id="menumoverfix"><p className="menuP">Menu</p><img className="moverImgFix" src="blue-arrow.png"></img></button>

        <div className="introDiv" id="introdiv">
          <div className="introContainer">
            <p className="introHeader">The best customer service is what we always strive for.</p>
            <p className="introBody">FIRE-LINK Technologies Inc. is an independently owned and operated home-grown company. When Enrique Perez, President, started the company in 2013, 
              he assembled a team of engineers, technicians and installers to provide high quality work. Beginning from day one, he cared about providing the 
              best protection systems available with the highest quality monitoring and service. We have never lost focus. Customer service is still our number one priority.</p>
            <div className="introSubContainer">
              <p><img src="checkmark.png"></img>Fire Alarm</p>
              <p><img src="checkmark.png"></img>Security Systems</p>
              <p><img src="checkmark.png"></img>Area of Refuge Systems</p>
            </div>
            <div className="introSubContainer">
              <p><img src="checkmark.png"></img>Access Control</p>
              <p><img src="checkmark.png"></img>Video Surveillance</p>
            </div>
          </div>
          <img className="menuImg" id="menuimg" src="contractors.png"></img>
          <p className="smallIntroHeader">The best customer service is what we always strive for.</p>
          <button className="openAbout" id="openabout" onClick={e => this.openAbout()} >Learn More<img className="aboutArrow" src="down-arrow.png"></img></button>
        </div>

        <div className="smallSubIntro" id="smallsubintro">
          <div style={{paddingBottom:"0"}} className="smallIntroSubContainer">
            <p><img src="checkmark.png"></img>Fire Alarm</p>
            <p><img src="checkmark.png"></img>Security Systems</p>
            <p><img src="checkmark.png"></img>Area of Refuge Systems</p>
          </div>
          <div style={{paddingTop:"5px"}} className="smallIntroSubContainer">
            <p><img src="checkmark.png"></img>Access Control</p>
            <p><img src="checkmark.png"></img>Video Surveillance</p>
          </div>
          <p className="smallIntroBody">FIRE-LINK Technologies Inc. is an independently owned and operated home-grown company. When Enrique Perez, President, started the company in 2013, 
            he assembled a team of engineers, technicians and installers to provide high quality work. Beginning from day one, he cared about providing the 
            best protection systems available with the highest quality monitoring and service. We have never lost focus.<br/><br/></p>
            <p className="smallIntroSentence">Customer service is still our number one priority.</p>
        </div>

        <div className="serviceDiv" id="servicediv">
          <img className="serviceImg" src="p1.png"></img>
          <div className="serviceContainer">
              <p className="serviceHeader">Our Services</p>
              <br/>
              <Link href="/BurglarAlarms">
                <p className="serviceSub">Burglar Alarm Systems</p>
              </Link>
              <p className="serviceBody">Once you’ve designed your system and selected your financing, our highly trained technicians can come 
                out and install your new security system.</p>
              <br/>
              <Link href="/FireAlarms">
                <p className="serviceSub">Fire Alarm Systems</p>
              </Link>
              <p className="serviceBody">Our alarms can quickly alert your local fire department and send you a text or alert as soon as fire 
                is detected in your home.</p>
              <br/>
              <Link href="/MassSystems">
                <p className="serviceSub">Mass Notification Systems</p>
              </Link>
              <p className="serviceBody">For any important or time-sensitive alert, our systems allow you to engage in real-time interactions 
              with any size audience.</p>
          </div>

          <p className="smallServiceHeader">Take a look at a few of our services.</p>
            <div className="smallServiceDiv">
              <Link href="/BurglarAlarms">
                <div className="smallServiceContainer">
                    <p className="serviceSub">Burglar Alarm Systems</p>
                    <p className="serviceBody">Once you’ve designed your system and selected your financing, our highly trained technicians can come 
                      out and install your new security system.</p>
                </div>
              </Link>
              <Link href="/FireAlarms">
                <div className="smallServiceContainer">
                    <p className="serviceSub">Fire Alarm Systems</p>
                    <p className="serviceBody">Our alarms can quickly alert your local fire department and send you a text or alert as soon as fire 
                      is detected in your home.</p>
                </div>
              </Link>
              <Link href="/MassSystems">
                <div className="smallServiceContainer">
                    <p className="serviceSub">Mass Notification Systems</p>
                    <p className="serviceBody">For any important or time-sensitive alert, our systems allow you to engage in real-time interactions 
                    with any size audience.</p>
                </div>
              </Link>
            </div>
        </div>

        <div className="contactDiv" id="contactdiv">
          <p className="contactHeader">Contact Us</p>
          <div className="contactContainer">
            <a href="tel:+17864494354">
              <p className="contactBody"><img className="contactImg" src="phone.png">
              </img>(786) 449-4354</p>
            </a>
            <a href="mailto:eperez@firelinktech.com">
              <p className="contactBody"><img className="contactImg" src="envelope.png">
              </img>eperez@firelinktech.com</p>
            </a>
          </div>
          <div style={{width:"270px"}} className="contactContainer">
            <p className="contactBody"><img className="markerImg" src="marker.png">
            </img>10277 NW 128th Terrace, Hialeah Gardens, FL 33018</p>
            <p className="contactBody"><img className="contactImg" src="state-license.png">
            </img>EF20001178</p>
          </div>
        </div>

        <footer id="footer">
            <img src="customLogo.png" alt="Vercel Logo" className="logo" />
        </footer>
      </div>
    )
  }
}

export default Home;
