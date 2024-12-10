// journal/pages/FresasPage.jsx
import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import fresas1 from '../assets/SVG/fresas/fresas1.svg';
import fresas2 from '../assets/SVG/fresas/fresas2.svg';
import fresas3 from '../assets/SVG/fresas/fresas3.svg';
import fresas4 from '../assets/SVG/fresas/fresas4.svg';
import { ProductCard } from '../components/ProductCard';
import { useMemo } from 'react';
import { AnimatedBox } from '../components/AnimatedBox';

const fresas = [
    { id: 1, title: 'Fresas con glaseado rosa', price: 9000, img: fresas1, details: "Contiene: Glaseado rosa, Crema batida, Cereza, Fresas cortadas" },
    { id: 2, title: 'Fresas con chispas', price: 7000, img: fresas2, details: "Contiene: Chispas de colores, Crema batida, Leche condensada, Fresas cortadas" },
    { id: 3, title: 'Fresas con crema y brownie', price: 15000, img: fresas3, details: "Contiene: Brownie, Salsa de chocolate, Crema batida, Fresas cortadas" },
    { id: 4, title: 'Fresas con helado', price: 12000, img: fresas4, details: "Contiene: Una bola de helado, Leche condensada, Fresas cortadas, Sabor opcional" },
];

export const FresasPage = () => {
    const { status } = useSelector(state => state.auth);
    const isAuthenticated = (status === 'authenticated');

    const fresasConDescuento = useMemo(() => {
        if (!isAuthenticated) return fresas;

        return fresas.map(f => {
            const descuento = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
            const precioConDescuento = Math.round(f.price * (1 - descuento / 100));
            return {
                ...f,
                discount: descuento,
                discountedPrice: precioConDescuento
            };
        });
    }, [isAuthenticated]);

    return (
        <AnimatedBox>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
                Fresas con Crema
            </Typography>
            <Grid container spacing={4}>
                {fresasConDescuento.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <AnimatedBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5, ease: 'easeOut' }}
                        >
                            <ProductCard
                                title={item.title}
                                image={item.img}
                                details={
                                    isAuthenticated
                                        ? `${item.details}\nDescuento: ${item.discount}%\nPrecio original: $${item.price}\nPrecio con descuento: $${item.discountedPrice}`
                                        : item.details
                                }
                                price={isAuthenticated ? item.discountedPrice : item.price}
                                discount={isAuthenticated ? item.discount : null}
                            />
                        </AnimatedBox>
                    </Grid>
                ))}
            </Grid>
        </AnimatedBox>
    );
};
