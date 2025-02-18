
import { AppRoutes } from '@/routes/index'
import { BrowserRouter } from 'react-router-dom'
import "@/styles/global.scss"

function App() {

  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  )
}

export default App
