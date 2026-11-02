import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { WebDevelopmentSolutions } from './app'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebDevelopmentSolutions />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
