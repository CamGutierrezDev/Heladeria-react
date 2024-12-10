// journal/components/SideBar.jsx
import { Box, Divider, List, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';
import { Link as RouterLink } from 'react-router-dom';

// Importa los iconos que desees usar para los enlaces de navegación
import HomeIcon from '@mui/icons-material/Home';
import IcecreamIcon from '@mui/icons-material/Icecream';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const SideBar = ({ displayName }) => {
    const { notes } = useSelector(state => state.journal);
    const { status } = useSelector(state => state.auth);
    const isAuthenticated = (status === 'authenticated');

    // Definir los enlaces de navegación
    const navigationLinks = [
        { title: 'Inicio', path: '/', icon: <HomeIcon /> },
        { title: 'Helados', path: '/helados', icon: <IcecreamIcon /> },
        { title: 'Malteadas', path: '/malteadas', icon: <LocalCafeIcon /> },
        { title: 'Fresas con Crema', path: '/fresas-con-crema', icon: <LocalOfferIcon /> },
        { title: 'Contacto', path: '/contacto', icon: <ContactMailIcon /> },
    ];

    // Agregar "Recetas" solo si está autenticado
    if (isAuthenticated) {
        navigationLinks.push({ title: 'Recetas', path: '/recetas', icon: <MenuBookIcon /> });
    }

    return (
        <Box
            sx={{ 
                textAlign: 'center', 
                backgroundColor: '#EC69B0', 
                height: '100%',
                '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                animation: 'fadeIn 0.5s ease-in-out',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: 2
            }}
        >
            <Typography variant='h6' sx={{ my: 2, fontWeight: 'bold' }}>
                { displayName || 'CamCupIce' }
            </Typography>
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', width: '80%' }} />

            {/* Sección de Enlaces de Navegación */}
            <Box sx={{ width: '100%', mt: 2 }}>
                <List>
                    {navigationLinks.map((link, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                component={RouterLink}
                                to={link.path}
                                sx={{
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        transition: 'background-color 0.3s ease'
                                    }
                                }}
                            >
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText primary={link.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}

                    {/* Enlaces de Autenticación */}
                    {!isAuthenticated && (
                        <>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component={RouterLink}
                                    to="/auth/login"
                                    sx={{
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            transition: 'background-color 0.3s ease'
                                        }
                                    }}
                                >
                                    <ListItemIcon sx={{ color: '#fff' }}>
                                        <LoginIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Login" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component={RouterLink}
                                    to="/auth/register"
                                    sx={{
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            transition: 'background-color 0.3s ease'
                                        }
                                    }}
                                >
                                    <ListItemIcon sx={{ color: '#fff' }}>
                                        <AppRegistrationIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Register" />
                                </ListItemButton>
                            </ListItem>
                        </>
                    )}
                </List>
            </Box>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)', width: '80%', my: 2 }} />

            {/* Sección de Notas */}
            <List sx={{ width: '100%', overflowY: 'auto', flexGrow: 1 }}>
                { notes.map(note => (
                    <SideBarItem key={note.id} {...note} />
                )) }
            </List>
        </Box>
    );
};
