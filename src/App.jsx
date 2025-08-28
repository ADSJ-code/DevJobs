import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsListPage from './pages/JobsListPage'; // <-- Adicione esta linha

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vagas" element={<JobsListPage />} /> {/* <-- Adicione esta linha */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;