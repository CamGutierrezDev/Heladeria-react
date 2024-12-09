// journal/pages/MalteadasPage.jsx
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import malteada1 from '../assets/SVG/malteadas/malteada1.svg';
import malteada2 from '../assets/SVG/malteadas/malteada2.svg';
import malteada3 from '../assets/SVG/malteadas/malteada3.svg';
import malteada4 from '../assets/SVG/malteadas/malteada4.svg';
import malteada5 from '../assets/SVG/malteadas/malteada5.svg';
import malteada6 from '../assets/SVG/malteadas/malteada6.svg';

const malteadas = [
  { id:1, title:'Malteada sencilla', price:8000, img:malteada1 },
  { id:2, title:'Malteada con trozos de fruta', price:10000, img:malteada2 },
  { id:3, title:'Malteada con brownie y chocolate', price:13000, img:malteada3 },
  { id:4, title:'Malteada galleta', price:10000, img:malteada4 },
  { id:5, title:'Malteada con almendras', price:12000, img:malteada5 },
  { id:6, title:'Malteada con chocolate y chispas', price:8000, img:malteada6 },
];

export const MalteadasPage = () => {
    return (
        <Box>
            <Typography variant="h4" sx={{ mb:4, fontWeight:'bold', color:'primary.main' }}>Malteadas</Typography>
            <Grid container spacing={2}>
                {malteadas.map(item => (
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
