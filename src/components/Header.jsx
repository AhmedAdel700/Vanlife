import 'bootstrap/dist/css/bootstrap.min.css';
import { Link , NavLink} from 'react-router-dom'

export default function Header() {
//     function fakeLogOut() {
//         localStorage.removeItem("loggedIn")
// }

    return (
        <header>
            {/*a- Stands For My className Not BootStrap Ones*/}
            <nav className="navbar navbar-expand-lg z-3">
                <div className="container">

                    <Link className="a-logo navbar-brand" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 640 512">
                        <path fill="#FF8C38" d="M64 104v88h96V96H72c-4.4 0-8 3.6-8 8zm482 88L465.1 96H384v96H546zm-226 0V96H224v96h96zM592
                        384H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V104C0 64.2 32.2 32
                        72 32H192 352 465.1c18.9 0 36.8 8.3 49 22.8L625 186.5c9.7 11.5 15 26.1 15 41.2V336c0 26.5-21.5 48-48 48zm-64 0a48 48
                        0 1 0 -96 0 48 48 0 1 0 96 0zM160 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                        </svg>
                        VANLIFE</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link fw-semibold a-link" : "nav-link fw-semibold" }
                                aria-current="page" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link fw-semibold a-link" : "nav-link fw-semibold" }
                                to="/about">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link fw-semibold a-link" : "nav-link fw-semibold" }
                                to="/host">Host</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link fw-semibold a-link" : "nav-link fw-semibold" }
                                to="/vans">Vans</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/login" className={({isActive}) => isActive && "login"}>
                                    <svg className='icon-user' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="#FF8C38" d="M304 128a80 80 0 1 0 -160 0 80 80
                                    0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 
                                    464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 
                                    304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                                </NavLink>
                            </li>
{/* 
                            <li className="nav-item">
                            <button onClick={fakeLogOut} className='btn text-danger'>log out</button>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
