// journal/pages/HeladosPage.jsx
import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import helado1 from '../assets/SVG/helados/helado1.svg';
import helado2 from '../assets/SVG/helados/helado2.svg';
import helado3 from '../assets/SVG/helados/helado3.svg';
import helado4 from '../assets/SVG/helados/helado4.svg';
import helado5 from '../assets/SVG/helados/helado5.svg';
import helado6 from '../assets/SVG/helados/helado6.svg';
import { ProductCard } from '../components/ProductCard';
import { useMemo } from 'react';
import { AnimatedBox } from '../components/AnimatedBox';

const helados = [
    { id: 1, title: 'Helado y fresas en plato de cono', price: 10000, img: helado1, details: "Contiene: Fresas cortadas, Dos bolas de helado, Sabor opcional" },
    { id: 2, title: 'Helado con brownie y crema', price: 12000, img: helado2, details: "Contiene: Dos bolas de helado, Pedazos de brownie, Crema batida, Sabor opcional" },
    { id: 3, title: 'Copa de helado, mani y barquillos', price: 14000, img: helado3, details: "Contiene: Dos bolas de helado, Cinco barquillos, Maní, Sabor opcional" },
    { id: 4, title: 'Cono de helado', price: 3000, img: helado4, details: "Contiene: Una o dos bolas de helado, Sabor opcional" },
    { id: 5, title: 'Helado con salsa de chocolate', price: 12000, img: helado5, details: "Contiene: Dos bolas de helado, Salsa de chocolate, Barquillos, Sabor opcional" },
    { id: 6, title: 'Banana Split', price: 17000, img: helado6, details: "Contiene: Tres bolas de helado, Crema batida, Jalea, Cereza, Sabor opcional" },
];

export const HeladosPage = () => {
    const { status } = useSelector(state => state.auth);
    const isAuthenticated = (status === 'authenticated');

    const heladosConDescuento = useMemo(() => {
        if (!isAuthenticated) return helados;

        return helados.map(h => {
            const descuento = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
            const precioConDescuento = Math.round(h.price * (1 - descuento / 100));
            return {
                ...h,
                discount: descuento,
                discountedPrice: precioConDescuento
            };
        });
    }, [isAuthenticated]);

    return (
        <AnimatedBox>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
                Helados
            </Typography>
            <Grid container spacing={4}>
                {heladosConDescuento.map((item, index) => (
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
