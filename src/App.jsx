import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsListPage from './pages/JobsListPage';
import JobDetailPage from './pages/JobDetailPage'; // <-- Adicione esta linha

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vagas" element={<JobsListPage />} />
        <Route path="/vaga/:id" element={<JobDetailPage />} /> {/* <-- Adicione esta linha */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;