// journal/layout/JournalLayout.jsx
import { useState } from 'react';
import { Box, Drawer, useMediaQuery, useTheme, Container, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { useSelector } from 'react-redux';
import { SideBar } from '../components/SideBar';
import { drawerWidth, navItems } from '../constants';

export const JournalLayout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { displayName } = useSelector(state => state.auth);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection:'column', minHeight:'100vh', backgroundColor:'#fff' }}>
            
            {/* NavBar con enlaces directos en pantallas grandes */}
            <NavBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />

            {/* Drawer sólo en mobile */}
            { isMobile && (
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
                    <SideBar displayName={displayName} />
                </Drawer>
            )}

            {/* Contenido principal centrado */}
            <Box
                component="main"
                sx={{ 
                    flexGrow: 1, 
                    mt: '64px', // Ajustar para no solapar con el AppBar
                    '@keyframes fadeInMain': {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                    },
                    animation: 'fadeInMain 0.7s ease-in-out'
                }}
            >
                {/* Usamos Container para centrar el contenido y limitar su ancho */}
                <Container maxWidth="lg" sx={{ py: 4 }}>
                    {children}
                </Container>
            </Box>
        </Box>
    )
};
