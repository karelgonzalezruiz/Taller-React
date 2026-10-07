import { NavLink } from 'react-router';

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark shadow-sm">
            <div className="container">
                <span className="navbar-brand fw-semibold">Panel de contactos</span>
                <div className="navbar-nav ms-auto">
                    <NavLink to="/" className="nav-link">Inicio</NavLink>
                    <NavLink to="/contactos" className="nav-link">Contactos</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
