import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { path } from './components/path/Path'
import Header from './components/ui/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {path.map((item) => (
            <Route path={item.path} key={item.id} element={item.element} />
          ))}
        </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App
