import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Sobre from './components/Sobre.jsx'
import Busines from './components/Busines.jsx'
import Integrantes from './components/Integrantes.jsx'
import Lixo from './components/Lixo.jsx'
import './App.css'

function App() {
  return (
    <main>
      <Header />
      <Sobre />
      <Busines />
      <Gallery />
      <Integrantes />
      <Lixo />
      <Footer />
    </main>
  )
}
export default App
