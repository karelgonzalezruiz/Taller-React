import { Link } from 'react-router';

function HomePage() {
    return (
        <div className="p-5 bg-white rounded-3 shadow-sm">
            <h1 className="fw-bold">Panel de contactos</h1>
            <p className="lead text-muted mb-4">
                Bienvenido al panel. Consulta la lista de contactos y el detalle de cada uno.
            </p>
            <Link to="/contactos" className="btn btn-secondary btn-lg">
                Ver contactos
            </Link>
        </div>
    );
}

export default HomePage;
