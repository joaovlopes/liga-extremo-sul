
import { AppRoutes } from '@/routes/index'
import { BrowserRouter } from 'react-router-dom'
import "@/styles/global.scss"

function App() {

  return (
    <BrowserRouter basename="/liga-extremo-sul">
        <AppRoutes />
    </BrowserRouter>
  )
}

export default App
