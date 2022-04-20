import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  BrowserRouter
} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import socials from "./socials.json";
import Projects from "./Projects";
import Portfolio from "./Portfolio";
import Music from "./Music";

function App() {

  // Add social buttons
  const navSocials = [];
  var key = 0;

  socials.map((item) => {
    navSocials.push(
        <a key={key} href={item.link} target={"_blank"} rel="noreferrer">
            <li className="socialbutton">
                <img src={item.image} alt={item.name}/>
            </li>
        </a>
    );
    key++;
    return 0; // This is literally just to remove a warning
  })

  // main box hide animation
  var animUp = false;
  const anim = () => {
    if (animUp) return;
    const main = document.getElementById('main');

    main.classList.remove("maineaseout"); // reset animation
    void main.offsetWidth; // trigger reflow
    main.classList.add("maineaseout"); // start animation
    animUp = !animUp;
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <BrowserRouter>
      <div className='main'>

        <div className='mainbox' id='main'>

          <img src=".\imgs\BeeGeeTwo_blurred.png" alt="background" />

          <div className='buttonarray'>
            <NavLink to="/Projects"><div className='roundbutton' onClick={() => {anim();}}>Projects</div></NavLink>
            <NavLink to="/Portfolio"><div className='roundbutton' onClick={() => {anim();}}>Portfolio</div></NavLink>
            <NavLink to="/Music"><div className='roundbutton' onClick={() => {anim();}}>Music</div></NavLink>
          </div>
        </div>

        <div className="content">
          <Routes>
            {/* <Route path="/" component={Home}/> */}
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>
            <Route path="/Music" element={<Music/>}/>
            {/* <Route path="/Portfolio" component={Portfolio}/> */}
          </Routes>
        </div>

        <footer>
          <p>Socials</p>
          <div className='socialbar'>
            <ul>
              {navSocials}
            </ul>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
