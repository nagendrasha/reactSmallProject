import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./componants/Header";
import Color from './pages/Color';
import Textutils from './pages/Textutils';
import Counter from './pages/Counter';
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Textutils/>}/>
          <Route exact path="/color" element={<Color/>}/>
          <Route exact path="/counter" element={<Counter/>}/>
          <Route exact path="/todo" element={<Todo/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
