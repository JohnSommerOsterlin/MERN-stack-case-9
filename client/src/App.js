// Dependencies
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

// Hooks
import { useAuthContext } from "./hooks/useAuthContext"

// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

// Components
import Navbar from "./components/Navbar"


function App() {
  const {user} = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages px-3 py-6 flex justify-center">
          <Routes>
            <Route 
            path="/"
            element={user ? <Home /> : <Navigate to="/login"/>}
            />
            <Route 
            path="/login"
            element={!user ? <Login /> : <Navigate to="/"/>}
            />
            <Route 
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/"/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
