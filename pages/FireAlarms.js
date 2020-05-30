import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import {firebase} from "../tools/config.js"
import {database} from "../tools/database.js"
import "./_app.js"

var provider = new firebase.auth.GoogleAuthProvider();

class FireAlarms extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            user: null,
            email: null,
            uid: null,
            name: null,
            files: [],
            userFiles: [],
            admin:"none"
        };
    }

  async componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          email:user.email,
          uid:user.uid,
          name:user.displayName,
        })
        document.getElementById("fireSignin").style.display="none";
        document.getElementById("fireSideview").style.display="inline-block";
        if (user.email === "sterlin.velazquez37@gmail.com" || user.email === "firelinkwebsite@gmail.com") {
            this.setState({admin:"block"});
        }
      }
    })
    this.setState({files: await database.getAllFiles("FireSystemFiles")})
  }; 

  toggleActive() {
    document.getElementById("servicesDrop").classList.toggle("active");
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

  async signIn() {
    this.setState({user : await firebase.auth().signInWithPopup(provider)});
    if (this.state.user !== null) {
      this.setState({
        email : this.state.user.additionalUserInfo.profile.email,
        uid : this.state.user.user.uid,
        name : this.state.user.additionalUserInfo.profile.name
      })
      if (this.state.user.additionalUserInfo.profile.email === "sterlin.velazquez37@gmail.com" || 
          this.state.user.additionalUserInfo.profile.email === "firelinkwebsite@gmail.com") {
        this.setState({admin:"block"})
      }
      document.getElementById("fireSignin").style.display="none";
      document.getElementById("fireSideview").style.display="inline-block";
    }
  }

  async signOut() {
    await firebase.auth().signOut();
    this.setState({
      user:null,
      uid:null,
      email:null,
      name:null,
      admin:"none",
      userFiles:[]
    })
    document.getElementById("fireSignin").style.display="inline-block";
    document.getElementById("fireSideview").style.display="none";
  }

  async showFiles() {
    document.getElementById("fileUploader").addEventListener('change', async (event) => {
        document.getElementById("loader").style.top = "calc(50% - 20px)";
        await database.add("FireSystemFiles", event.target.files, this.state.email, this.state.uid, this.state.name)
        this.setState({files: await database.getAllFiles("FireSystemFiles")})
        document.getElementById("loader").style.top = "-10%";
    })
  }

  async openLink(file) {
    await firebase.storage().ref("FireSystemFiles/" + file.ref).getDownloadURL().then((res) => {
      window.open(res, '_blank')
    })
  }

  async eraseFile(event, file) {
    event.stopPropagation();
    await database.erase("FireSystemFiles", file, this.state.uid)
    this.setState({files: await database.getAllFiles("FireSystemFiles")})
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

        <div className="burgIntroDiv">
          <div className="burgIntroContainer">
            <p className="burgIntroHeader">Fire Alarms Services</p>
            <p className="burgIntroSub">Turnkey Installations • Parts and Smarts • Test and Certification • Annual Inspections</p>
            <br/>
            <p className="burgIntroBody">Our Fire Alarm Systems are carefully designed by a Professional Engineer with over 13 years 
            of experience in the Life Safety Industry.</p>
          </div>
          <img className="burgIntroImg" src="kidde-logo.png"></img>

          <div className="burgFilesContainer">
            {
                this.state.files.map( (each) => 
                <div className="burgFile">
                  <p className="file" onClick={e => this.openLink(each)}>{each.name}</p>
                  <p className="smallDetails">Posted by {each.username} on {each.date}  -  File Size: {Math.floor(each.size / 1024)} MB</p>
                  <img className="eraseFile" src="erase.png" style={{display:this.state.admin}} onClick={e => this.eraseFile(e, each)}></img>
                </div>
                )
            }
          </div>

          <div style={{display:"inline-block"}} onClick={e => this.signIn()} id="fireSignin" className="burgSignIn">
              <p><b>Sign In</b> To Your Google Account To Upload Files</p>
          </div>

          <div style={{display:"none"}} id="fireSideview" className="burgSideContainer">
              <input onClick={e => this.showFiles()} type="file" id="fileUploader" className="addFile" accept=".pdf" multiple></input>
              <p onClick={e => this.signOut()} className="signOut" id="signout">Sign Out</p>
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

        <div className="loader" id="loader">
          <p className="loaderName" id="loadername">Uploading Files</p>
          <div class="sk-chase" id="loading">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default FireAlarms;