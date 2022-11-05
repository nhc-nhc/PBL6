import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Learn from './Pages/Learn'
import Search from './Pages/Search'
import Lesson from './Pages/Lesson'
import Asssessment from './Pages/Assessment';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/learn" element={<Learn />} />
        <Route path="/search" element={<Search />} />
        <Route path='/assessment' element={<Asssessment />} />
        <Route path='/learn/:id' element={<Lesson />} />
      </Routes>
    </Router>
  );
}

export default App;
