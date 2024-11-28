import { menu } from '../assets/data/menu'

const Menu = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        {
          menu.map((menuItem) => (
            <div key={menuItem.menu_id}>
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src={menuItem.imagen} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{menuItem.nombre}</h5>
                      <p className="card-text">{menuItem.ingredientes}</p>
                      <p className="card-text"><small className="text-body-secondary">${menuItem.Precio}</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Menu