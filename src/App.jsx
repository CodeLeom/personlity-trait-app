
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import NewTest from "./Pages/NewTest";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test-page" element={<NewTest />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
