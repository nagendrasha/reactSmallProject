import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./componants/Header";
import Color from './pages/Color';
import Counter2 from "./pages/Counter2";
import Notes from "./pages/Notes";
import Textutils from './pages/Textutils';
import Todo from "./pages/Todo";
import Urlshortner from "./pages/Urlshortner";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Textutils/>}/>
          <Route exact path="/color" element={<Color/>}/>
          <Route exact path="/counter" element={<Counter2/>}/>
          <Route exact path="/todo" element={<Todo/>}/>
          <Route exact path="/shortner" element={<Urlshortner/>}/>
          <Route exact path="/notes" element={<Notes/>}  />
        </Routes>
      </Router>
    </>
  );
}
export default App;
