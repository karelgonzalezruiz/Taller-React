import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import ContactDetailPage from './pages/ContactDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactos" element={<ContactsPage />} />
          <Route path="/contactos/:id" element={<ContactDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
