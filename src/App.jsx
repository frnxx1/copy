import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterComponent from './pages/RouterComponent';
// push
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
