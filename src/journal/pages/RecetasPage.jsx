// journal/pages/RecetasPage.jsx
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useState } from 'react';
import malteada1 from '../assets/SVG/malteadas/malteada1.svg';
import fresas1 from '../assets/SVG/fresas/fresas1.svg';

const recetasData = [
  {
    title: "Malteadas",
    img: malteada1,
    videoUrl: "https://www.youtube.com/embed/JpFBMk802yg"
  },
  {
    title: "Especial",
    img: fresas1,
    videoUrl: "https://www.youtube.com/embed/72hqK5Pureg"
  },
  {
    title: "Helado",
    img: malteada1, // Puedes cambiar la imagen a una específica de helado si la tienes
    videoUrl: "https://www.youtube.com/embed/lOQHvNeUvrM"
  },
  {
    title: "Fresas con Crema",
    img: fresas1,
    videoUrl: "https://www.youtube.com/embed/ye425rRi2YA"
  }

  
];

export const RecetasPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleContainerClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
        Conoce nuestros ingredientes secretos
      </Typography>

      <Grid container spacing={4}>
        {recetasData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 3,
                transition: 'transform 0.3s',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)' }
              }}
              onClick={() => handleContainerClick(item.videoUrl)}
            >
              <Card sx={{ borderRadius: '12px', boxShadow: 'none' }}>
                {selectedVideo === item.videoUrl ? (
                  // Muestra el video en lugar de la imagen al hacer click
                  <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                    <Box
                      component="iframe"
                      src={item.videoUrl}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0
                      }}
                    />
                  </Box>
                ) : (
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'contain',
                      padding: 2,
                      backgroundColor: '#fff',
                    }}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#4f3cc9', fontWeight: 'bold', textAlign: 'center' }}>
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
