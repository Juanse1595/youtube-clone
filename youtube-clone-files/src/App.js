import './App.css';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import RecommendedVideos from './RecommendedVideos';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/search/:searchTerm' element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
