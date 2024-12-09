// journal/pages/MalteadasPage.jsx
import { Box, Grid, Typography } from '@mui/material';
import malteada1 from '../assets/SVG/malteadas/malteada1.svg';
import malteada2 from '../assets/SVG/malteadas/malteada2.svg';
import malteada3 from '../assets/SVG/malteadas/malteada3.svg';
import malteada4 from '../assets/SVG/malteadas/malteada4.svg';
import malteada5 from '../assets/SVG/malteadas/malteada5.svg';
import malteada6 from '../assets/SVG/malteadas/malteada6.svg';
import { ProductCard } from '../components/ProductCard';

const malteadas = [
  { 
    id: 1, 
    title:'Malteada sencilla', 
    price:8000, 
    img:malteada1,
    details:"Contiene: Salsa dulce, Una bola de helado, Sabor opcional"
  },
  { 
    id:2, 
    title:'Malteada con trozos de fruta', 
    price:10000, 
    img:malteada2,
    details:"Contiene: Trozos de fruta, Crema batida, Sabor opcional"
  },
  { 
    id:3, 
    title:'Malteada con brownie y chocolate', 
    price:13000, 
    img:malteada3,
    details:"Contiene: Pedazos de brownie y chocolate, Salsa dulce, Crema batida, Sabor opcional"
  },
  { 
    id:4, 
    title:'Malteada galleta', 
    price:10000, 
    img:malteada4,
    details:"Contiene: Galletas wafer, Barquillos, M&M, Crema batida, Sabor opcional"
  },
  { 
    id:5, 
    title:'Malteada con almendras', 
    price:12000, 
    img:malteada5,
    details:"Contiene: Rayadura de limón, Almendras, Crema batida, Sabor opcional"
  },
  { 
    id:6, 
    title:'Malteada con chocolate y chispas', 
    price:8000, 
    img:malteada6,
    details:"Contiene: Salsa de chocolate, Chispas de colores, Barquillos, Sabor opcional"
  },
];

export const MalteadasPage = () => {
    return (
        <Box>
            <Typography 
                variant="h4" 
                sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}
            >
                Malteadas
            </Typography>
            <Grid container spacing={4}>
                {malteadas.map(item => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <ProductCard 
                          title={item.title} 
                          price={item.price} 
                          image={item.img}
                          details={item.details}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
