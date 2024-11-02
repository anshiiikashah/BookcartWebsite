import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './components/Home/Home';
import { SearchProvider } from './components/SearchContext/Searchcontext';

function App() {
    return (
      <SearchProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </SearchProvider>
        
    );
}

export default App