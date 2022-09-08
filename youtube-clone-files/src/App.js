import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Router>
        <Routes>
          <Route path='/'>
            <>
              <Header />
              <div className='app__page'>
                <Sidebar />
                <RecommendedVideos />
              </div>
            </>
          </Route>
          <Route path='/search'>
            <>
            </>
            <Header />
            <h1>Search</h1>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
