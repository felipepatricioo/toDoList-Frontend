import "./App.css";
import Header from "./components/shared/Header/index";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Register from "./pages/Register/index";
import ViewById from "./pages/View/index";
import Edit from "./pages/Edit/index";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<ViewById />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
