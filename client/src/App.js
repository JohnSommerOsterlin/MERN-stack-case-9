// Dependencies
import { BrowserRouter, Routes, Route} from "react-router-dom"

// Pages
import Home from "./pages/Home"

// Components
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages px-3 py-6 flex justify-center">
          <Routes>
            <Route 
            path="/"
            element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
