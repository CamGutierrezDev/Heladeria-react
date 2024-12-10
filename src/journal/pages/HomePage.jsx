// journal/pages/HomePage.jsx
import { Box, Grid, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import heladosImg from '../assets/SVG/h1.svg'; 
import malteadasImg from '../assets/SVG/m1.svg';
import fresasImg from '../assets/SVG/f1.svg';

export const HomePage = () => {
    return (
        <Box sx={{ textAlign:'center', mt:4 }}>
            <Typography variant="h4" sx={{ mb:4, color: '#EC69B0', fontWeight:'bold' }}>
                Descubre nuestros deliciosos postres helados
            </Typography>
            
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button 
                        component={RouterLink} 
                        to="/helados"
                        sx={{
                            width:140, 
                            height:140, 
                            borderRadius:'50%',
                            backgroundColor:'secondary.main',
                            color:'#fff',
                            fontWeight:'bold',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center',
                            '&:hover':{ backgroundColor:'secondary.dark', opacity:0.9 }
                        }}
                    >
                        <img src={heladosImg} alt="Helados" style={{ width:60, height:60, marginBottom:8 }} />
                        Helados
                    </Button>
                </Grid>
                <Grid item>
                    <Button 
                        component={RouterLink} 
                        to="/malteadas"
                        sx={{
                            width:140, 
                            height:140, 
                            borderRadius:'50%',
                            backgroundColor:'secondary.main',
                            color:'#fff',
                            fontWeight:'bold',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center',
                            '&:hover':{ backgroundColor:'secondary.dark', opacity:0.9 }
                        }}
                    >
                        <img src={malteadasImg} alt="Malteadas" style={{ width:60, height:60, marginBottom:8 }} />
                        Malteadas
                    </Button>
                </Grid>
                <Grid item>
                    <Button 
                        component={RouterLink} 
                        to="/fresas-con-crema"
                        sx={{
                            width:140, 
                            height:140, 
                            borderRadius:'50%',
                            backgroundColor:'secondary.main',
                            color:'#fff',
                            fontWeight:'bold',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center',
                            '&:hover':{ backgroundColor:'secondary.dark', opacity:0.9 }
                        }}
                    >
                        <img src={fresasImg} alt="Fresas con Crema" style={{ width:60, height:60, marginBottom:8 }} />
                        Fresas con Crema
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};
