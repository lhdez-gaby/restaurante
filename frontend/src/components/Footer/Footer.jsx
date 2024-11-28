import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer d-flex aling-items-center justify-content-center p-5 flex-column text-center">
      <div>
        <h4 className='mb-4'>Síguenos en nuestras redes sociales</h4>
      </div>
      <div className='links'>
        <Link className="link-light" to="https://www.youtube.com">
          <i className="bi bi-youtube"></i>
          <p>Youtube</p>
        </Link>
        <Link className="link-light" to="https://www.facebook.com">
          <i className="bi bi-facebook"></i>
          <p>Facebook</p>
        </Link>
        <Link className="link-light" to="https://www.instagram.com">
          <i className="bi bi-instagram"></i>
          <p>Instagram</p>
        </Link>
        <Link className="link-light" to="https://www.tiktok.com">
          <i className="bi bi-tiktok"></i>
          <p>Tik Tok</p>
        </Link>
        <Link className="link-light" to="https://www.x.com">
          <i className="bi bi-twitter-x"></i>
          <p>X</p>
        </Link>
        
      </div>
    </footer>
  )
}

export default Footer