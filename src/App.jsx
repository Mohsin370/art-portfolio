import Catalouge from "./pages/catalouge/catalouge";
import Landing from "./pages/landing/landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalouge" element={<Catalouge />} />
      </Routes>
    </>
  );
}

export default App;
