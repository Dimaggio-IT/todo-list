import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { App } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
