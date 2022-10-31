import "./App.css";
import AddBook from "./components/AddBook/AddBook";
import ShowBooks from "./components/ShowBooks/ShowBooks";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App container mt-5 mb-5">
      <Routes>
        <Route path="" element={<Navigate to="books" />} />
        <Route path="books" element={<ShowBooks />} />
        <Route path="addbook" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
