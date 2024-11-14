import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import SearchPage from './components/SearchPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='profile' element={<ProfilePage/>} />
        <Route path='search' element={<SearchPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
