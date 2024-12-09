// journal/components/NavBar.jsx
import { useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { startLogout } from '../../store/auth';
import { drawerWidth, navItems } from '../constants';

export const NavBar = ({ handleDrawerToggle }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar
            position='fixed'
            sx={{ 
                width: '100%',
                ml: { sm: `${drawerWidth}px` },
                backgroundColor: '#EC69B0',
                boxShadow:'0px 2px 10px rgba(0,0,0,0.2)',
                '@keyframes fadeInNav': {
                    from: { opacity: 0, transform:'translateY(-20px)' },
                    to: { opacity: 1, transform:'translateY(0)' },
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
                        textDecoration:'none', 
                        color:'white', 
                        fontWeight:'bold', 
                        '&:hover': { 
                            opacity:0.8,
                            transition:'opacity 0.3s ease-in-out'
                        } 
                    }}
                >
                    JournalApp
                </Typography>

                {/* En pantallas grandes mostramos los enlaces en el NavBar */}
                {!isMobile && (
                    <Box sx={{ flexGrow: 1, display:'flex', justifyContent:'center', gap:2, ml:4 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.text}
                                component={RouterLink}
                                to={item.to}
                                sx={{
                                    color:'white',
                                    fontWeight:'bold',
                                    textTransform:'none',
                                    '&:hover': { opacity:0.9 }
                                }}
                            >
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                )}

                <Box sx={{ ml:'auto' }}>
                    <IconButton 
                        color='inherit'
                        onClick={onLogout}
                        sx={{
                            '&:hover': {
                                backgroundColor:'rgba(255,255,255,0.1)',
                                transition:'background-color 0.3s ease'
                            }
                        }}
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
};
