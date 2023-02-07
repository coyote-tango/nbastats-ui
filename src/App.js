import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Players from "./routes/Players";
import Teams from "./routes/Teams";
import Home from "./routes/Home";



function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home/>}/>
        </Routes>
      </Router>
  );
}

export default App;