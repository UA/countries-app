import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Detail from './pages/detail';
import Home from './pages/home';
import { ThemeProvider } from './providers/Theme';
import "./styles/variables.scss";
import "./styles/globals.scss";
import "./styles/variables.globals.scss";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index={false}  path="/:countryid" element={<Detail />} />
          <Route index={false}  path="*" element={<Home />} />
        </Routes>
      </ThemeProvider>

    </Router>


  );
}

export default App;
