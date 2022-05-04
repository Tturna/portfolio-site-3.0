import React from "react";
import {
  Route,
  Routes,
  NavLink,
  BrowserRouter
} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import socials from "./socials.json";
import Home from "./Home";
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

  // main box hide and show animation
  var animUp = false;
  const anim = (btnName) => {

    // If clicking the home button, use easein animation
    // Otherwise use easeout animation
    // If ease out has already played and the user clicked on a non-home button, do nothing and return
    var mainAnimName = "maineaseout";
    var titleAnimName = "titlehideup100";

    if (animUp && btnName === "home") {
      mainAnimName = "maineasein";
      titleAnimName = "titlerevealdown100"
    }

    if ((animUp && btnName !== "home") ||
        (!animUp && btnName === "home"))
    {
      return;
    }
    
    const main = document.getElementById('main');
    const title = document.getElementById('title');

    main.classList.remove("maineaseout"); // reset animation
    main.classList.remove("maineasein");
    title.classList.remove("titlehidedown100");
    title.classList.remove("titlerevealdown100");
    void main.offsetWidth; // trigger reflow (don't quite understand this, I kinda stole it)
    main.classList.add(mainAnimName); // start animation
    title.classList.add(titleAnimName)
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

          <img src=".\imgs\mainimg.jpg" alt="main background" />

          <div className="titlebox" id="title">
            <h1>Roope Juponaho</h1>
            <h2>Video game and small time software development with music on the side.</h2>
          </div>

          <div className='buttonarray'>
            <div className="buttoncenter">
              <NavLink to="/"><div className='roundbutton' onClick={() => {anim("home");}}>Home</div></NavLink>
              <NavLink to="/Projects"><div className='roundbutton' onClick={() => {anim("projects");}}>Projects</div></NavLink>
              <NavLink to="/Portfolio"><div className='roundbutton' onClick={() => {anim("portfolio");}}>Portfolio</div></NavLink>
              <NavLink to="/Music"><div className='roundbutton' onClick={() => {anim("music");}}>Music</div></NavLink>
            </div>
          </div>
        </div>

        <div>
          <Routes>
            {/* All paths have the / character, so we have to use exact path for our home path */}
            <Route exact path="/" element={<Home/>}/>
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
