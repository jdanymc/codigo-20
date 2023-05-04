import ReactDOM from 'react-dom/client'
import { ContextData } from './components/context/data.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextData>
    <AppRoutes />
  </ContextData>,
)
