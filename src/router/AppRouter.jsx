// AppRouter.jsx
import { Navigate, Route, Routes } from 'react-router-dom';
import { useCheckAuth } from '../hooks';
import { CheckingAuth } from '../ui';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { HomePage } from '../journal/pages/HomePage';
import { HeladosPage } from '../journal/pages/HeladosPage';
import { MalteadasPage } from '../journal/pages/MalteadasPage';
import { FresasPage } from '../journal/pages/FresasPage';
import { ContactPage } from '../journal/pages/ContactPage';
import { JournalLayout } from '../journal/layout/JournalLayout';

export const AppRouter = () => {
  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {/* Todas las rutas son públicas */}
      <Route path="/" element={
        <JournalLayout>
          <HomePage />
        </JournalLayout>
      } />

      <Route path="/helados" element={
        <JournalLayout>
          <HeladosPage />
        </JournalLayout>
      } />

      <Route path="/malteadas" element={
        <JournalLayout>
          <MalteadasPage />
        </JournalLayout>
      } />

      <Route path="/fresas-con-crema" element={
        <JournalLayout>
          <FresasPage />
        </JournalLayout>
      } />

      <Route path="/contacto" element={
        <JournalLayout>
          <ContactPage />
        </JournalLayout>
      } />

      {/* Rutas de autenticación (login/register) siempre accesibles */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* Redirección para rutas no definidas */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
