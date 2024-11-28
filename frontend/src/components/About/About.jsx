import aboutimg from '../../assets/imagenes/about-banner.jpg'
import './About.css'

const About = () => {
  return(
    <section className=' mt-5'>
        <div className='about'>
          <div className=' pt-5 mx-4 d-flex flex-column align-items-center justify-content-center'>
            <h4 className='mb-5 text-center'>Acerca de nosotros.</h4>
            <p className='text-center'>
              Nuestra pasión por la gastronomía nos inspira a seleccionar los ingredientes más frescos y de la más alta calidad, creando platos que rinden homenaje tanto a las recetas tradicionales como a las tendencias contemporáneas.
            </p>
            <p className='text-center'>
              Ya sea que nos visites para celebrar una ocasión especial, disfrutar de una comida entre amigos o simplemente para deleitar tu paladar, nuestro equipo está comprometido a brindarte momentos memorables.
            </p>
          </div>
          <div className=''>
            <img className="img-fluid imagen" src={aboutimg} alt="Interior de restaurante" />
          </div>
        </div>
      </section>
  )
}

export default About