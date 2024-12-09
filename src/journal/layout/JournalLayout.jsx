// journal/layout/JournalLayout.jsx
import { useState } from 'react';
import { Box, Drawer, useMediaQuery, useTheme, Container } from '@mui/material';
import { NavBar } from '../components/NavBar';
import { useSelector } from 'react-redux';
import { SideBar } from '../components/SideBar';
import { drawerWidth } from '../constants';

import fondoRosa from '../assets/SVG/fondo rosa.png'; // Importa la imagen

export const JournalLayout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { displayName } = useSelector(state => state.auth);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            minHeight: '100vh',
            // Fondo Rosa
            backgroundImage: `url(${fondoRosa})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
        }}>
            
            <NavBar handleDrawerToggle={handleDrawerToggle} />
            
            {isMobile && (
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

            <Box
                component="main"
                sx={{ 
                    flexGrow: 1, 
                    mt: '64px',
                    '@keyframes fadeInMain': {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                    },
                    animation: 'fadeInMain 0.7s ease-in-out',
                    py:4
                }}
            >
                <Container maxWidth="lg">
                    {children}
                </Container>
            </Box>
        </Box>
    );
};
