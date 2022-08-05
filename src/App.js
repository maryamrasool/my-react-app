import "./App.css";
import Counter from "./components/Counter";
import UserDetails from "./components/UserDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/user-details" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
