// journal/components/NavBar.jsx
import { useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography, Box } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { startLogout } from '../../store/auth';

export const NavBar = ({ drawerWidth = 240, handleDrawerToggle }) => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar 
            position='fixed'
            sx={{ 
                width: { sm: `calc(100% - ${drawerWidth}px)` },
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
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                    onClick={handleDrawerToggle}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
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
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
