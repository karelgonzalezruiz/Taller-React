import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import type { ContactDetail } from '../types/contact';
import { getContact } from '../services/contactsService';
import Avatar from '../components/Avatar';

function ContactDetailPage() {
    const { id } = useParams();
    const [contact, setContact] = useState<ContactDetail | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        getContact(id)
            .then(setContact)
            .catch(() => setError('Contacto no encontrado'));
    }, [id]);

    if (error) {
        return (
            <>
                <div className="alert alert-danger">{error}</div>
                <Link to="/contactos" className="btn btn-secondary">Volver</Link>
            </>
        );
    }

    if (!contact) {
        return (
            <div className="d-flex align-items-center gap-2 text-muted py-4">
                <div className="spinner-border spinner-border-sm" role="status" />
                Cargando…
            </div>
        );
    }

    return (
        <div className="card shadow-sm border-0" style={{ maxWidth: 560 }}>
            <div className="card-body p-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                    <Avatar name={contact.name} />
                    <div>
                        <h3 className="card-title fw-bold mb-0">{contact.name}</h3>
                        <span className="text-muted">{contact.company.name}</span>
                    </div>
                </div>
                <dl className="row mb-4">
                    <dt className="col-sm-3 text-muted fw-normal">Correo</dt>
                    <dd className="col-sm-9">{contact.email}</dd>
                    <dt className="col-sm-3 text-muted fw-normal">Teléfono</dt>
                    <dd className="col-sm-9">{contact.phone}</dd>
                    <dt className="col-sm-3 text-muted fw-normal">Sitio web</dt>
                    <dd className="col-sm-9 mb-0">{contact.website}</dd>
                </dl>
                <Link to="/contactos" className="btn btn-secondary">← Volver</Link>
            </div>
        </div>
    );
}

export default ContactDetailPage;
