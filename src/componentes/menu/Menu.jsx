import React ,{ useState } from 'react';
import './Menu.css'
export default function Menu(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShowModal = () => props.modalCreate()
  
    return (
        <>
            <div className="col-2 menu bg-transp">

                <nav className="">
                    <p className='title-menu'>Menú</p>
                    <ul className="nav navbar-nav ulmenu">
                        <li className="nav-item align-items-center">
                            <a className="nav-link" href="#"><i className="fas fa-home mrpx-6"></i> Inicio </a>
                        </li>
                        <li className="nav-item">
                            <a type='button' onClick={handleShowModal} className="nav-link" href="#"> <i className="fab fa-elementor mrpx-6"></i> Crear Evento </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <i className="fas fa-paper-plane mrpx-6"></i> Contacto </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <i className="fas fa-user-tie mrpx-6"></i>Nosotros </a>
                        </li>
                    </ul>
                </nav>
                <nav className="mt-4">
                    <p className='title-menu'>Categorias</p>
                    <ul className="nav navbar-nav ulmenu">
                        <li className="nav-item align-items-center">
                            <a className="nav-link" href="#"><i class="fas fa-glass-cheers mrpx-6"></i> <p>Sociales</p> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <i class="fas fa-theater-masks mrpx-6"></i>Culturales </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <i class="fas fa-volleyball-ball mrpx-6"></i> Deportivos  </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <i class="fas fa-book mrpx-6"></i>Educativos </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}