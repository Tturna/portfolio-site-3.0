// import logo from './logo.svg';
import './App.css';

function App() {
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

    <div className='main'>

      <div className='mainbox'>
        <img src=".\imgs\BeeGeeTwo_blurred.png" alt="background" />

        <div className='buttonarray'>
          <div className='roundbutton'>Projects</div>
          <div className='roundbutton'>Portfolio</div>
          <div className='roundbutton'>Music</div>
        </div>
      </div>

      <footer>
        <p>Socials</p>
      </footer>
    </div>
  );
}

export default App;
