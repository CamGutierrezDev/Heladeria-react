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
        <Box sx={{
            '@keyframes fadeUp': {
              from: { opacity:0, transform:'translateY(20px)' },
              to: { opacity:1, transform:'translateY(0)' }
            },
            animation:'fadeUp 0.7s ease-in-out',
        }}>
            <Typography variant="h4" sx={{ mb:4, fontWeight:'bold', color:'primary.main', textAlign:'center' }}>
                Helados
            </Typography>
            <Grid container spacing={2}>
                {helados.map(item => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card sx={{ 
                            transition:'transform 0.3s, box-shadow 0.3s', 
                            '&:hover':{
                                transform:'scale(1.05)',
                                boxShadow:'0px 4px 20px rgba(0,0,0,0.1)'
                            },
                            borderRadius: '12px'
                        }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.img}
                                alt={item.title}
                                sx={{borderRadius:'12px 12px 0 0'}}
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{color:'#4f3cc9', fontWeight:'bold'}}>
                                    {item.title}
                                </Typography>
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