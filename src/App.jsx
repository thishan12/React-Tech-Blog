import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Tech from './Pages/TechPage'

import { About, Blognews, Footer, Hero, Navbar, Pdfs, StartJ, Technologies } from './components';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Technologies" element={<Tech />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
