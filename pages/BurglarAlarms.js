import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import {firebase} from "../tools/config.js"
import {database} from "../tools/database.js"
import "./_app.js"

var provider = new firebase.auth.GoogleAuthProvider();

class BurglarAlarms extends React.Component {

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
        document.getElementById("burgSignin").style.display="none";
        document.getElementById("burgSideview").style.display="inline-block";
        if (user.email === "sterlin.velazquez37@gmail.com" || user.email === "firelinkwebsite@gmail.com") {
          this.setState({admin:"block"});
        }
      }
    })
    this.setState({files: await database.getAllFiles("BurglarSystemFiles")})
  }; 

  setTitle(event) {
      this.setState({title: event.target.value})
  }

  toggleActive() {
    document.getElementById("servicesDrop").classList.toggle("active");
    console.log(document.getElementById("servicesDrop").className)
  }

  scrollDown() {
    window.scrollTo({
      top:1000000,
      behavior:'smooth'
    });
  }

  async signIn() {
    this.setState({user : await firebase.auth().signInWithRedirect(provider)});
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
      document.getElementById("burgSignin").style.display="none";
      document.getElementById("burgSideview").style.display="inline-block";
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
    document.getElementById("burgSignin").style.display="inline-block";
    document.getElementById("burgSideview").style.display="none";
  }

  async showFiles() {
    document.getElementById("fileUploader").addEventListener('change', async (event) => {
        await database.add("BurglarSystemFiles", event.target.files, this.state.email, this.state.uid, this.state.name)
        this.setState({files: await database.getAllFiles("BurglarSystemFiles")})
    })
  }

  async openLink(file) {
    console.log(file.ref)
    await firebase.storage().ref("BurglarSystemFiles/" + file.ref).getDownloadURL().then((res) => {
      window.open(res, '_blank')
    })
  }

  async eraseFile(file) {
    await database.erase("BurglarSystemFiles", file, this.state.uid)
    this.setState({files: await database.getAllFiles("BurglarSystemFiles")})
  }

  render() {
    console.log(this.state.admin)
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
          <button><a href="https://www.kidde-esfire.com/" target="_blank"><b>PRODUCTS</b></a></button>
          <button onClick={e => this.scrollDown()}><b>CONTACT US</b></button> 
        </div>

        <div className="burgIntroDiv">
          <div className="burgIntroContainer">
            <p className="burgIntroHeader">Burglar Alarms Services</p>
            <p className="burgIntroSub">Turnkey Installations • Parts and Smarts • Test and Certification • Annual Inspections</p>
            <br/>
            <p className="burgIntroBody">Our Burglar Alarm Systems are carefully designed by a Professional Engineer with over 13 years 
            of experience in the Life Safety Industry.</p>
          </div>
          <img className="burgIntroImg" src="vigilant.png"></img>

          <div className="burgFilesContainer">
            {
                this.state.files.map( (each) => 
                <div className="burgFile">
                  <p className="file" onClick={e => this.openLink(each)}>{each.name}</p>
                  <p className="smallDetails">Posted by {each.username} on {each.date}  -  File Size: {Math.floor(each.size / 1024)} MB</p>
                  <img className="eraseFile" src="erase.png" style={{display:this.state.admin}} onClick={e => this.eraseFile(each)}></img>
                </div>
                )
            }
          </div>

          <div style={{display:"inline-block"}} onClick={e => this.signIn()} id="burgSignin" className="burgSignIn">
              <p><b>Sign In</b> To Your Google Account To Upload Files</p>
          </div>

          <div style={{display:"none"}} id="burgSideview" className="burgSideContainer">
              <input onClick={e => this.showFiles()} type="file" id="fileUploader" className="addFile" accept=".pdf" multiple></input>
              <p onClick={e => this.signOut()} className="signOut" id="signout">Sign Out</p>
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

export default BurglarAlarms;
