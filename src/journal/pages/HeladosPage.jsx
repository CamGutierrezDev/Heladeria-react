// journal/pages/HeladosPage.jsx
import { Box, Grid, Typography } from '@mui/material';
import helado1 from '../assets/SVG/helados/helado1.svg';
import helado2 from '../assets/SVG/helados/helado2.svg';
import helado3 from '../assets/SVG/helados/helado3.svg';
import helado4 from '../assets/SVG/helados/helado4.svg';
import helado5 from '../assets/SVG/helados/helado5.svg';
import helado6 from '../assets/SVG/helados/helado6.svg';
import { ProductCard } from '../components/ProductCard';

const helados = [
  { 
    id: 1, 
    title: 'Helado con fresas en plato de cono', 
    price: 10000, 
    img: helado1,
    details: "Contiene: Fresas cortadas, Dos bolas de helado, Sabor opcional"
  },
  { 
    id: 2, 
    title: 'Helado con brownie y crema', 
    price: 12000, 
    img: helado2,
    details: "Contiene: Dos bolas de helado, Pedazos de brownie, Crema batida, Sabor opcional"
  },
  { 
    id: 3, 
    title: 'Copa de helado, mani y barquillos', 
    price: 14000, 
    img: helado3,
    details: "Contiene: Dos bolas de helado, Cinco barquillos, Maní, Sabor opcional"
  },
  { 
    id: 4, 
    title: 'Cono de helado', 
    price: 3000, 
    img: helado4,
    details: "Contiene: Una o dos bolas de helado, Sabor opcional"
  },
  { 
    id: 5, 
    title: 'Helado con salsa de chocolate', 
    price: 12000, 
    img: helado5,
    details: "Contiene: Dos bolas de helado, Salsa de chocolate, Barquillos, Sabor opcional"
  },
  { 
    id: 6, 
    title: 'Banana Split', 
    price: 17000, 
    img: helado6,
    details: "Contiene: Tres bolas de helado, Crema batida, Jalea, Cereza, Sabor opcional"
  },
];

export const HeladosPage = () => {
    return (
        <Box>
            <Typography 
                variant="h4" 
                sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}
            >
                Helados
            </Typography>
            <Grid container spacing={4}>
                {helados.map(item => (
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
