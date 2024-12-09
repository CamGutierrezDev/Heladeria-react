// journal/layout/JournalLayout.jsx
import { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NavBar } from '../components/NavBar'; // Asegúrate de la ruta correcta

const navItems = [
  { text: 'Inicio', to: '/' },
  { text: 'Helados', to: '/helados' },
  { text: 'Malteadas', to: '/malteadas' },
  { text: 'Fresas con Crema', to: '/fresas-con-crema' },
  { text: 'Contacto', to: '/contacto' },
];

export const JournalLayout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerWidth = 240; // Definir el ancho del Drawer

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#EC69B0', height: '100%' }}>
            <Typography variant="h6" sx={{ my: 2, color:'#fff' }}>
                Journal
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem 
                        button 
                        key={item.text} 
                        component={RouterLink} 
                        to={item.to}
                        sx={{ color:'#fff' }}
                    >
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            {/* Integrar NavBar y pasar el manejador del Drawer */}
            <NavBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />

            {/* Drawer para dispositivos móviles */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            {/* Drawer permanente para pantallas más grandes */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>

            {/* Contenido principal */}
            <Box
                component="main"
                sx={{ 
                    flexGrow: 1, 
                    p: 3, 
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    mt: '64px' // Ajusta el margen superior para evitar solapamiento con el AppBar
                }}
            >
                {children}
            </Box>
        </Box>
    )
}
