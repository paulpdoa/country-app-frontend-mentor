import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import Detail from './pages/Detail';
import { FilterProvider } from './context/FilterContext';

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
          <Route path='/detail/:country' element={<Detail />} />
        </Routes>
      </FilterProvider>
    </ThemeProvider>
  )
}

export default App
