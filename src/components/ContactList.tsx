import { useEffect, useState } from 'react';
import type { Contact } from '../types/contact';
import { getContacts } from '../services/contactsService';
import ContactRow from './ContactRow';

function ContactList() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getContacts()
            .then((data) => setContacts(data))
            .catch(() => setError('No se pudieron cargar los contactos'))
            .finally(() => setCargando(false));
    }, []);

    if (cargando) {
        return (
            <div className="d-flex align-items-center gap-2 text-muted py-4">
                <div className="spinner-border spinner-border-sm" role="status" />
                Cargando contactos…
            </div>
        );
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="card shadow-sm border-0">
            <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                        <tr>
                            <th scope="col" className="ps-4">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <ContactRow key={contact.id} contact={contact} />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="card-footer bg-white text-muted small">
                {contacts.length} contactos
            </div>
        </div>
    );
}

export default ContactList;
