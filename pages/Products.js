import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import "./_app.js"

class Products extends React.Component {

  toggleActive() {
    document.getElementById("servicesDrop").classList.toggle("active");
    console.log(document.getElementById("servicesDrop").className)
  }

  toggleSideActive() {
    document.getElementById("servicesSideDrop").classList.toggle("active");
  }

  scrollDown() {
    window.scrollTo({
      top:1000000,
      behavior:'smooth'
    });
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

        <div id="navbar" className="navigationBar">
          <Link href="/index">
            <img src="customLogo.png"></img>
          </Link>
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
          <Link href="/index">
            <img src="customLogo.png"></img>
          </Link>
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

        <div className="productIntroDiv">
            <p className="productHeader">Our Products</p>
            <p className="productBody">This page is currently under development. In the meantime, feel free to browse a small selection of our inventory.</p>

            <div className="gridContainer">
                <div className="grid">
                    <div className="imgContainer">
                        <img className="gridImg" src="p2.png"></img>
                        <div className="descriptionContainer">
                            <p className="imgHeader">The FX-1000 Panel</p>
                            <p className="imgBody">The FX-1000 provides one Class A or Class B intelligent device loop that supports up to 250 device addresses.</p>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img className="gridImg" src="p3.png"></img>
                        <div className="descriptionContainer">
                            <p className="imgHeader">RZI16-2</p>
                            <p className="imgBody">Remote Zone Interface - An addressable device that provides connections for sixteen Class B initiating device circuits (IDCs).</p>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img className="gridImg" src="p4.png"></img>
                        <div className="descriptionContainer">
                            <p className="imgHeader">VS1-G</p>
                            <p className="imgBody">Fire Alarm Control Panel - Single Loop - 64 Intelligent Devices Max</p>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img className="gridImg" src="p5.png"></img>
                        <div className="descriptionContainer">
                            <p className="imgHeader">VM-LOC</p>
                            <p className="imgBody">Local Operations Console - Remotely control emergency messaging and system operation.</p>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img className="gridImg" src="p6.png"></img>
                        <div className="descriptionContainer">
                            <p className="imgHeader">ANS50XG</p>
                            <p className="imgBody">50 Watt ANS Expander Panel - Includes an amplifier, tone generator, digital message repeater, and supervisory interface.</p>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img className="gridImg" src="p7.png"></img>
                        <div className="descriptionContainer">
                            <p className="imgHeader">K-RLCD</p>
                            <p className="imgBody">Intelligent LCD Annunciator - Provides status indication and common controls for compatible fire alarm control panels.</p>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img className="gridImg" src="p8.png"></img>
                        <div className="descriptionContainer">
                            <p className="imgHeader">IB4U</p>
                            <p className="imgBody">Isolator Base - Protects SLC from complete collapse due to a wire to wire short.</p>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img className="gridImg" src="p9.png"></img>
                        <div className="descriptionContainer">
                            <p className="imgHeader">K-270</p>
                            <p className="imgBody">Intelligent Manual Station - Single Action - Designed expressly for small buildings.</p>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img className="gridImg" src="p10.png"></img>
                        <div className="descriptionContainer">
                            <p className="imgHeader">SIGA-CRH</p>
                            <p className="imgBody">High Power Control Relay Module - Designed for interface applications that require a high voltage, high curent delay.</p>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img className="gridImg" src="p11.png"></img>
                        <div className="descriptionContainer">
                            <p className="imgHeader">ANS50MDG2</p>
                            <p className="imgBody">50 Watt Audio Notification Panel - High-performance audio notification system that provides voice evacuation capability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="contactDiv">
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

export default Products;