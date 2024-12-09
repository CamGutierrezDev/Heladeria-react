// journal/pages/HeladosPage.jsx
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import helado2 from '../assets/SVG/helados/helado2.svg';
import helado1 from '../assets/SVG/helados/helado1.svg';
import helado3 from '../assets/SVG/helados/helado3.svg';
import helado4 from '../assets/SVG/helados/helado4.svg';
import helado5 from '../assets/SVG/helados/helado5.svg';
import helado6 from '../assets/SVG/helados/helado6.svg';

const helados = [
  { id:1, title:'Helado con fresas en plato de cono', price:10000, img:helado1 },
  { id:2, title:'Helado con brownie y crema', price:12000, img:helado2 },
  { id:3, title:'Copa de helado, mani y barquillos', price:14000, img:helado3 },
  { id:4, title:'Cono de helado', price:3000, img:helado4 },
  { id:5, title:'Helado con salsa de chocolate', price:12000, img:helado5 },
  { id:6, title:'Banana Split', price:17000, img:helado6 },
];

export const HeladosPage = () => {
    return (
        <Box>
            <Typography variant="h4" sx={{ mb:4, fontWeight:'bold', color:'primary.main' }}>Helados</Typography>
            <Grid container spacing={2}>
                {helados.map(item => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card sx={{ 
                            transition:'transform 0.3s', 
                            '&:hover':{transform:'scale(1.05)'} 
                        }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.img}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{color:'#4f3cc9', fontWeight:'bold'}}>{item.title}</Typography>
                                <Typography variant="body2">Likes: 800</Typography>
                                <Typography variant="body2">Precio: ${item.price}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
