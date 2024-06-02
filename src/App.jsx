import Header from "./components/header/Header";
import "./assets/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Leadership from "./pages/Leadership/Leadership";
import Tracts from "./pages/Tracts/Tracts";
import Event from "./pages/Event/Event";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/tracts" element={<Tracts />} />
          <Route path="/event" element={<Event />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <h1>Hello World! </h1> */}
    </>
  );
}

export default App;
