// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Views/Home';
import Registration from './Views/Registration';
import LeaderBoard from './Views/LeaderBoard';
import SubmissionDone from './Components/submissionDone/SubmissionDone';



function App() {
  return (
    < div className=' bg-dark w-screen min-h-screen'>
    <Router >
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/leaderb" element={<LeaderBoard />} />
        <Route path="/submission_done" element={<SubmissionDone />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
