import { Link } from 'react-router';

function NotFoundPage() {
    return (
        <div className="text-center py-5">
            <p className="display-1 fw-bold text-secondary mb-0">404</p>
            <h2 className="mb-4">Página no encontrada</h2>
            <Link to="/" className="btn btn-secondary">Volver al inicio</Link>
        </div>
    );
}

export default NotFoundPage;
