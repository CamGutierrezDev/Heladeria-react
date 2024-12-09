// journal/routes/JournalRoutes.jsx
import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalLayout } from '../layout/JournalLayout';
import { ContactPage, FresasPage, HeladosPage, MalteadasPage } from '../pages';
import { HomePage } from '../pages/HomePage';

export const JournalRoutes = () => {
  return (
    <JournalLayout>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/helados" element={ <HeladosPage /> } />
        <Route path="/malteadas" element={ <MalteadasPage /> } />
        <Route path="/fresas-con-crema" element={ <FresasPage /> } />
        <Route path="/contacto" element={ <ContactPage /> } />

        {/* Redirección para rutas no definidas */}
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </JournalLayout>
  );
};
