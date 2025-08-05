import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <footer>
            <div className="footer-content">
              <div className="footer-section">
                <label htmlFor="oieee">REDES SOCIAIS</label>
                <ul id="oieee">
                  <li><a href="https://www.carlosromero.com.br/2012/03/o-incrivel-gato-com-duas-faces.html">Faceface</a></li>
                  <li><a href="facebook.com">Bookbook</a></li>
                  <li><a href="instagram.com">Instagrado</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <label htmlFor="tchau">AJUDA</label>
                <ul>
                  <li><a href="#">Meu</a></li>
                  <li><a href="#">Nome</a></li>
                  <li><a href="#">É Cláudio</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <label htmlFor="boa-tarde">BOMBA!!!!</label>
                <ul>
                  <li><a href="#">Boa Tarde</a></li>
                  <li><a href="#">Boa Noite</a></li>
                  <li><a href="#">Bom Dia</a></li>
                </ul>
              </div>
            </div>
            <br />
            <p>© Copyright. All right right reserved good night copyright.</p>
          </footer>
    </>
  )
}

export default App
