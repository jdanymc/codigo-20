import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextData } from './components/context/data.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextData>
    <App />
  </ContextData>,
)
