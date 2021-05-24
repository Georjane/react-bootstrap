// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App container-fluid">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        {/* <p className="navbar-toggler">Sign Up</p> */}

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="w-25 bg-warning">Make Responsive this Page</h1>
      
    </div>
  );
}

export default App;
