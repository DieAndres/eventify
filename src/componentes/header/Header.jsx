import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
export default function Header() {
    return (
        <div>
            <nav className="navbar menu navmenhed">
                <div className="container-fluid">
                    <a className="link-hover-none"><h2 className='lglet2'>EVENTIFY</h2></a>
                    <div className='conseadrop'>
                        <form className="d-flex">
                            <div className='searchcont'>
                                <i className="fas fa-search"></i>
                                <input className="form-control me-2 inputsar" type="search" placeholder="Search" aria-label="Search"></input>
                            </div>
                        </form>
                        <Dropdown>
                            <Dropdown.Toggle className='toggle-avatar' variant="success" id="dropdown-basic">
                                <img height="30" className='img-avatar' src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'></img>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='p-0 dropavatar'>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </nav>
        </div>
    )
}
