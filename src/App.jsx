import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/molecules/Navbar";
import AppRoutes from "./routes/AppRoutes";  // no .js extension

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;



