// journal/pages/FresasPage.jsx
import { Box, Grid, Typography } from '@mui/material';
import fresas1 from '../assets/SVG/fresas/fresas1.svg';
import fresas2 from '../assets/SVG/fresas/fresas2.svg';
import fresas3 from '../assets/SVG/fresas/fresas3.svg';
import fresas4 from '../assets/SVG/fresas/fresas4.svg';
import { ProductCard } from '../components/ProductCard';

const fresas = [
  { 
    id: 1, 
    title: 'Fresas con glaseado rosa', 
    price: 9000, 
    img: fresas1,
    details: "Contiene: Glaseado rosa, Crema batida, Cereza, Fresas cortadas"
  },
  { 
    id: 2, 
    title: 'Fresas con chispas', 
    price: 7000, 
    img: fresas2,
    details: "Contiene: Chispas de colores, Crema batida, Leche condensada, Fresas cortadas"
  },
  { 
    id: 3, 
    title: 'Fresas con crema y brownie', 
    price: 15000, 
    img: fresas3,
    details: "Contiene: Brownie, Salsa de chocolate, Crema batida, Fresas cortadas"
  },
  { 
    id: 4, 
    title: 'Fresas con helado', 
    price: 12000, 
    img: fresas4,
    details: "Contiene: Una bola de helado, Leche condensada, Fresas cortadas, Sabor opcional"
  },
];

export const FresasPage = () => {
    return (
        <Box>
            <Typography 
                variant="h4" 
                sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}
            >
                Fresas con Crema
            </Typography>
            <Grid container spacing={4}>
                {fresas.map(item => (
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
