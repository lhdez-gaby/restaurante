import './Home.css'
import heroslider1 from '../assets/imagenes/hero-slider-1.jpg'
import heroslider2 from '../assets/imagenes/hero-slider-2.jpg'
import heroslider3 from '../assets/imagenes/hero-slider-3.jpg'
import service1 from '../assets/imagenes/service-1.jpg'
import service2 from '../assets/imagenes/service-2.jpg'
import service3 from '../assets/imagenes/service-3.jpg'
import About from '../components/About/About'
import Features from '../components/Features/Features'


const Home = () => {
  return (
    <>
      <section>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={heroslider1} className="d-block w-100" alt="comida" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Por amor a la comida deliciosa</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={heroslider2} className="d-block w-100" alt="comida" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Sabores inspirados en las estaciones</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={heroslider3} className="d-block w-100" alt="comida" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Donde cada sabor cuenta una historia</h5>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section>
        <div className='container mb-5'>
          <div>
            <h4 className='text-center mt-5 texto-naranja'>Ofrecemos lo mejor en calidad</h4>
          </div>
          <div className='row'>
            <div className='col mt-3'>
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src={service1} alt="Hotcakes" />
                <h5 className='mt-1'>Desayunos</h5>
              </div>
            </div>
            <div className='col mt-3'>
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src={service2} alt="Comida" />
                <h5 className='mt-1'>Almuerzos y cenas</h5>
              </div>
            </div>
            <div className='col mt-3'>
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src={service3} alt="Bebida" />
                <h5 className='mt-1'>Bebidas</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Features/>
    </>
  )
}

export default Home