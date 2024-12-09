// journal/layout/JournalLayout.jsx

import { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme, Container, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

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
    const drawerWidth = 240;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} 
            sx={{ 
                textAlign: 'center', 
                backgroundColor: '#EC69B0', 
                height: '100%',
                // Animación fade-in del Drawer
                '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                animation: 'fadeIn 0.5s ease-in-out'
            }}
        >
            <Typography variant="h6" sx={{ my: 2, color:'#fff', fontWeight:'bold' }}>
                Journal
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem 
                        button 
                        key={item.text} 
                        component={RouterLink} 
                        to={item.to}
                        sx={{ 
                            color:'#fff', 
                            '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }, 
                            transition:'background-color 0.3s ease'
                        }}
                    >
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection:'column', minHeight:'100vh', backgroundColor:'#fff' }}>
            
            {/* NavBar */}
            <NavBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />

            {/* Drawer móvil */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            {/* Drawer permanente en pantallas grandes */}
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

            {/* Contenido principal con Container para centrar */}
            <Box
                component="main"
                sx={{ 
                    flexGrow: 1, 
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    mt: '64px', // Ajustar para no solapar con el AppBar
                    // Animación fade-in del contenido principal
                    '@keyframes fadeInMain': {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                    },
                    animation: 'fadeInMain 0.7s ease-in-out'
                }}
            >
                <Container maxWidth="lg" sx={{ py: 4 }}>
                    {children}
                </Container>
            </Box>
        </Box>
    )
}

