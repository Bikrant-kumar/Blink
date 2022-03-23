import './App.css';
import EnterpreneurshipPage from "./pages/EnterpreneurPage";
import BookDetailViewPage from "./pages/BookDetailViewPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App" data-testid="app">
        <Routes>
          <Route path="/" element={<EnterpreneurshipPage />} />
          <Route path="/detail" element={<BookDetailViewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;