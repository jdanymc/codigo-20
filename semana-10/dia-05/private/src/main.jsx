import ReactDOM from 'react-dom/client'
import Router from './router/Router'
import { UserProviderLogin } from './context/UserContext'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProviderLogin>
    <Router />
  </UserProviderLogin>,
)
