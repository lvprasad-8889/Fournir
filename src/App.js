import "./App.css";
import AddBook from "./components/AddBook/AddBook";
import ShowBooks from "./components/ShowBooks/ShowBooks";
function App() {
  return (
    <div className="App container mt-5 mb-5">
      <AddBook />
      <ShowBooks />
    </div>
  );
}

export default App;
