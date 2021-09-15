import './App.css';
import LeftBar from "./components/left-bar/LeftBar";
import Todo from "./components/todo/Todo";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
            <LeftBar/>
            <div className="main">
                <Todo/>
            </div>
        </div>
    </Router>
  );
}

export default App;
