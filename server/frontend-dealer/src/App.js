import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DealerList from './pages/DealerList';
import DealerDetail from './pages/DealerDetail';
import ReviewPage from './pages/ReviewPage';
import KansasDealers from './pages/KansasDealers';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DealerList />} />
        <Route path="/dealer/:id" element={<DealerDetail />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/kansas" element={<KansasDealers />} />


      </Routes>
    </Router>
  );
}


export default App;

