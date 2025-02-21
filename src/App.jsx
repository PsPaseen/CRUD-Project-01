import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { ProtectedRoute } from './routes/ProtectedRoute';
import { MainPage } from './pages/MainPage';
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/main" element={<MainPage />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App
