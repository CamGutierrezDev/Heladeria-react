// journal/pages/RecetasPage.jsx
import { Box, Typography, Grid } from '@mui/material';

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
                    border: 0
                  }}
                />
              </Box>
              <Box sx={{ textAlign: 'center', padding: 2 }}>
                <Typography variant="h6" sx={{ color: '#4f3cc9', fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
