// journal/components/NavBar.jsx
import { useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
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
                backgroundColor: '#EC69B0'
            }}
        >
            <Toolbar>
                {/* Botón de menú para dispositivos móviles */}
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                    onClick={handleDrawerToggle} // Añadido para abrir el Drawer en móviles
                >
                    <MenuOutlined />
                </IconButton>

                {/* Título y botón de logout */}
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography 
                        variant='h6' 
                        noWrap 
                        component={RouterLink} 
                        to="/" 
                        sx={{ textDecoration:'none', color:'white' }}
                    >
                        JournalApp
                    </Typography>

                    <IconButton 
                        color='inherit'
                        onClick={onLogout}
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
