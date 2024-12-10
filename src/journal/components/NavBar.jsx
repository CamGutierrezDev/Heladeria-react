// journal/components/NavBar.jsx
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, IconButton, Toolbar, Typography, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { startLogout } from '../../store/auth';
import { drawerWidth, navItems } from '../constants';

export const NavBar = ({ handleDrawerToggle }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { status, displayName } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(startLogout());
        navigate('/auth/login', { replace: true });
    }

    const isAuthenticated = (status === 'authenticated');

    return (
        <AppBar
            position='fixed'
            sx={{ 
                width: '100%',
                backgroundColor: '#EC69B0',
                boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
                '@keyframes fadeInNav': {
                    from: { opacity: 0, transform: 'translateY(-20px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
                animation: 'fadeInNav 0.5s ease-in-out'
            }}
        >
            <Toolbar>
                { isMobile && (
                    <IconButton
                        color='inherit'
                        edge="start"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuOutlined />
                    </IconButton>
                )}

                <Typography 
                    variant='h6' 
                    noWrap 
                    component={RouterLink} 
                    to="/" 
                    sx={{ 
                        textDecoration: 'none', 
                        color: 'white', 
                        fontWeight: 'bold', 
                        '&:hover': { 
                            opacity: 0.8,
                            transition: 'opacity 0.3s ease-in-out'
                        } 
                    }}
                >
                    JournalApp
                </Typography>

                {/* En pantallas grandes mostramos los enlaces en el NavBar */}
                {!isMobile && (
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2, ml: 4 }}>
                        <Button component={RouterLink} to="/" sx={{color:'white', fontWeight:'bold', textTransform:'none','&:hover':{opacity:0.9}}}>Inicio</Button>
                        <Button component={RouterLink} to="/helados" sx={{color:'white', fontWeight:'bold', textTransform:'none','&:hover':{opacity:0.9}}}>Helados</Button>
                        <Button component={RouterLink} to="/malteadas" sx={{color:'white', fontWeight:'bold', textTransform:'none','&:hover':{opacity:0.9}}}>Malteadas</Button>
                        <Button component={RouterLink} to="/fresas-con-crema" sx={{color:'white', fontWeight:'bold', textTransform:'none','&:hover':{opacity:0.9}}}>Fresas con Crema</Button>
                        <Button component={RouterLink} to="/contacto" sx={{color:'white', fontWeight:'bold', textTransform:'none','&:hover':{opacity:0.9}}}>Contacto</Button>
                    </Box>
                )}

                <Box sx={{ ml: 'auto', display:'flex', alignItems:'center', gap:2 }}>
                    {!isAuthenticated && (
                        <>
                            <Button 
                                component={RouterLink} 
                                to="/auth/login" 
                                sx={{ color: 'white', fontWeight:'bold', '&:hover':{opacity:0.9} }}
                            >
                                Login
                            </Button>
                            <Button 
                                component={RouterLink} 
                                to="/auth/register" 
                                sx={{ color: 'white', fontWeight:'bold', '&:hover':{opacity:0.9} }}
                            >
                                Register
                            </Button>
                        </>
                    )}

                    {isAuthenticated && (
                        <>
                            <Typography variant="body1" sx={{ color:'white', fontWeight:'bold', mr:2 }}>
                                Bienvenido, {displayName}
                            </Typography>
                            <IconButton 
                                color='inherit'
                                onClick={onLogout}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        transition: 'background-color 0.3s ease'
                                    }
                                }}
                            >
                                <LogoutOutlined />
                            </IconButton>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
