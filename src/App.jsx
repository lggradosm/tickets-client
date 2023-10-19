import { BrowserRouter, Route, Routes } from "react-router-dom"
import SelectionRole from "./components/SelectionRole"
import Container from "./components/Container"

function App() {
  
  return (
    <main className='w-full h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path="seleccion" element={ <SelectionRole />} />
          <Route path="*" element={ <Container />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
