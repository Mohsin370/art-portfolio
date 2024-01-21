import Catalouge from "./pages/catalouge/catalouge";
import Landing from "./pages/landing/landing";
import ItemDetails from "./pages/itemDetails/itemDetails";
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
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </>
  );
}

export default App;
