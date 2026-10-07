import { Link } from 'react-router';
import type { Contact } from '../types/contact';
import Avatar from './Avatar';

type ContactRowProps = {
    contact: Contact;
};

function ContactRow({ contact }: ContactRowProps) {
    return (
        <tr>
            <td className="ps-4 text-muted">{contact.id}</td>
            <td>
                <div className="d-flex align-items-center gap-2">
                    <Avatar name={contact.name} size="sm" />
                    <Link
                        to={`/contactos/${contact.id}`}
                        className="fw-semibold text-decoration-none"
                    >
                        {contact.name}
                    </Link>
                </div>
            </td>
            <td className="text-muted">{contact.email}</td>
        </tr>
    );
}

export default ContactRow;
