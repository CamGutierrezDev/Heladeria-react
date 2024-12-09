// journal/pages/FresasPage.jsx
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import fresas1 from '../assets/SVG/fresas/fresas1.svg';
import fresas2 from '../assets/SVG/fresas/fresas2.svg';
import fresas3 from '../assets/SVG/fresas/fresas3.svg';
import fresas4 from '../assets/SVG/fresas/fresas4.svg';

const fresas = [
  { id:1, title:'Fresas con glaseado rosa', price:9000, img:fresas1 },
  { id:2, title:'Fresas con chispas', price:7000, img:fresas2 },
  { id:3, title:'Fresas con crema y brownie', price:15000, img:fresas3 },
  { id:4, title:'Fresas con helado', price:12000, img:fresas4 },
];

export const FresasPage = () => {
    return (
        <Box>
            <Typography variant="h4" sx={{ mb:4, fontWeight:'bold', color:'primary.main' }}>Fresas con Crema</Typography>
            <Grid container spacing={2}>
                {fresas.map(item => (
                    <Grid item xs={12} sm={6} md={3} key={item.id}>
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
