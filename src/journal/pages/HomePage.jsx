// journal/pages/HomePage.jsx
import { Box, Grid, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import heladosImg from '../assets/SVG/h1.svg'; 
import malteadasImg from '../assets/SVG/m1.svg';
import fresasImg from '../assets/SVG/f1.svg';
import { AnimatedBox } from '../components/AnimatedBox';
import { motion } from 'framer-motion';

export const HomePage = () => {
    return (
        <AnimatedBox sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, color: '#EC69B0', fontWeight: 'bold' }}>
                Descubre nuestros deliciosos postres helados
            </Typography>
            
            <Grid container spacing={2} justifyContent="center">
                {[
                    { img: heladosImg, label: 'Helados', path: '/helados' },
                    { img: malteadasImg, label: 'Malteadas', path: '/malteadas' },
                    { img: fresasImg, label: 'Fresas con Crema', path: '/fresas-con-crema' },
                ].map((item, index) => (
                    <Grid item key={index}>
                        <Box
                            component={motion.div}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 * index, duration: 0.5, ease: 'easeOut' }}
                        >
                            <Button 
                                component={RouterLink} 
                                to={item.path}
                                sx={{
                                    width: 140, 
                                    height: 140, 
                                    borderRadius: '50%',
                                    backgroundColor: 'secondary.main',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    '&:hover': { backgroundColor: 'secondary.dark', opacity: 0.9 },
                                    boxShadow: 3,
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <Box src={item.img} alt={item.label} component="img" sx={{ width: 60, height: 60, mb: 1 }} />
                                {item.label}
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </AnimatedBox>
    );
};
