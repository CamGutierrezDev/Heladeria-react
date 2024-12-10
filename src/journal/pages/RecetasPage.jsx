// journal/pages/RecetasPage.jsx
import { Box, Typography, Grid } from '@mui/material';
import { AnimatedBox } from '../components/AnimatedBox';
import { motion } from 'framer-motion';

const recetasData = [
    {
        title: "Malteadas",
        videoUrl: "https://www.youtube.com/embed/JpFBMk802yg"
    },
    {
        title: "Especial",
        videoUrl: "https://www.youtube.com/embed/72hqK5Pureg"
    },
    {
        title: "Helado",
        videoUrl: "https://www.youtube.com/embed/lOQHvNeUvrM"
    },
    {
        title: "Fresas con Crema",
        videoUrl: "https://www.youtube.com/embed/ye425rRi2YA"
    }
];

export const RecetasPage = () => {
    return (
        <AnimatedBox>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
                Conoce nuestra receta secreta
            </Typography>

            <Grid container spacing={4}>
                {recetasData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <AnimatedBox
                            component={motion.div}
                            whileHover={{ scale: 1.02, boxShadow: '0px 4px 20px rgba(0,0,0,0.2)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5, ease: 'easeOut' }}
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '12px',
                                boxShadow: 3,
                                cursor: 'pointer',
                                '&:hover iframe': { filter: 'brightness(0.8)' }
                            }}
                        >
                            <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                                <Box
                                    component="iframe"
                                    src={item.videoUrl}
                                    title={item.title}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 0,
                                        transition: 'filter 0.3s ease'
                                    }}
                                />
                            </Box>
                            <Box sx={{ textAlign: 'center', padding: 2 }}>
                                <Typography variant="h6" sx={{ color: '#4f3cc9', fontWeight: 'bold' }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        </AnimatedBox>
                    </Grid>
                ))}
            </Grid>
        </AnimatedBox>
    );
};
