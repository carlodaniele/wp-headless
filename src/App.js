import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Blog from "./components/Blog";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import './App.css';

export default function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route 
            path="/" 
            element={<Blog />} 
          />
          <Route
            path='/post/:slug'
            element={<Post />}
          />
          <Route 
            path="*" 
            element={<NotFound />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
