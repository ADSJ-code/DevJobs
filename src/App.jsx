import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* As outras páginas (lista de vagas, detalhes) serão adicionadas aqui depois */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;