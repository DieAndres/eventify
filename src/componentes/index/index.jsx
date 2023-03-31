import React ,{ useState } from 'react';
import Menu from '../menu/Menu';
import Header from '../header/Header';
import imgheader from '../../utilidades/header-img.png'
import CrearEvento from '../CrearEvento/CrearEvento';
import './index.css'
export default function Index() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <div className='app-main'>
      <Header></Header>
      <CrearEvento show={show} handleClose={handleClose}></CrearEvento>
      <div className="container-fluid p-0 golmain">
        <div className="row max-width-1200 men-main">
          <Menu modalCreate ={handleShow}></Menu>

          <div className="col-10 bg-main" >
            <div className='header-main mt-4'>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className='text-header-main'>
                  <h3>¿Quieres planificar eventos memorables?</h3>
                  <p>¡No busques más! Aquí puedes crear tus propios eventos personalizados y enviar invitaciones a tus amigos y familiares. ¡Haz que cada ocasión sea especial y única con nuestra herramienta fácil de usar!</p>
                  <div className='btncon-ingresar mt-2'>
                    <button type="button" class="btn btn-primary">COMENZAR</button>
                  </div>
                </div>
                <div>
                  <img width={150} src={imgheader}></img>
                </div>
              </div>
            </div>
            <div className='container-main mt-4 mb-5'>
              <div className='row'>
                <div className='col-4'>
                  <div className='d-flex flex-column align-items-center card-event'>
                    <div>
                      <img className='w-100' src='https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg'></img>
                    </div>
                    <div>
                      <h3>Titulo</h3>
                    </div>
                    <div>
                      <p>Descripción</p>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary">VER</button>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='d-flex flex-column align-items-center card-event'>
                    <div>
                      <img className='w-100' src='https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg'></img>
                    </div>
                    <div>
                      <h3>Titulo</h3>
                    </div>
                    <div>
                      <p>Descripción</p>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary">VER</button>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='d-flex flex-column align-items-center card-event'>
                    <div>
                      <img className='w-100' src='https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg'></img>
                    </div>
                    <div>
                      <h3>Titulo</h3>
                    </div>
                    <div>
                      <p>Descripciónp</p>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary">VER</button>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='d-flex flex-column align-items-center card-event'>
                    <div>
                      <img className='w-100' src='https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg'></img>
                    </div>
                    <div>
                      <h3>Titulo</h3>
                    </div>
                    <div>
                      <p>Descripción</p>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary">VER</button>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='d-flex flex-column align-items-center card-event'>
                    <div>
                      <img className='w-100' src='https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg'></img>
                    </div>
                    <div>
                      <h3>Titulo</h3>
                    </div>
                    <div>
                      <p>Descripción</p>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary">VER</button>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='d-flex flex-column align-items-center card-event'>
                    <div>
                      <img className='w-100' src='https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg'></img>
                    </div>
                    <div>
                      <h3>Titulo</h3>
                    </div>
                    <div>
                      <p>Descripción</p>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary">VER</button>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='d-flex flex-column align-items-center card-event'>
                    <div>
                      <img className='w-100' src='https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg'></img>
                    </div>
                    <div>
                      <h3>Titulo</h3>
                    </div>
                    <div>
                      <p>Descripción</p>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary">VER</button>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='d-flex flex-column align-items-center card-event'>
                    <div>
                      <img className='w-100' src='https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg'></img>
                    </div>
                    <div>
                      <h3>Titulo</h3>
                    </div>
                    <div>
                      <p>Descripción</p>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary">VER</button>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='d-flex flex-column align-items-center card-event'>
                    <div>
                      <img className='w-100' src='https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg'></img>
                    </div>
                    <div>
                      <h3>Titulo</h3>
                    </div>
                    <div>
                      <p>Descripción</p>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary">VER</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
