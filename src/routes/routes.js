import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
)

export default Router
