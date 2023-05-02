import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ContextCarrito } from './components/context/ContextCarrito.jsx'
import AppRoutes from './route/AppRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextCarrito>
        <AppRoutes />
    </ContextCarrito>
)
