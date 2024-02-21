import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterComponent from './pages/RouterComponent';
function App() {
  return (
    <>
      <BrowserRouter>
        <RouterComponent/>
      </BrowserRouter>
    </>
  );
}

export default App;
