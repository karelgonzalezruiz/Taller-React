import { Link } from 'react-router';
import ContactList from '../components/ContactList';

function ContactsPage() {
    return (
        <>
            <h2 className="fw-bold mb-3">Contactos</h2>
            <ContactList />
            <Link to="/" className="btn btn-secondary btn-lg mt-4">
                Volver al inicio
            </Link>
        </>
    );
}

export default ContactsPage;
