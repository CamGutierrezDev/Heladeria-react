// journal/components/ProductCard.jsx
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { FavoriteBorder, InfoOutlined, LocalOffer } from '@mui/icons-material';

export const ProductCard = ({ title, price, image, details, discount }) => {
    return (
        <Box sx={{ 
            position:'relative', 
            overflow:'hidden',
            borderRadius:'12px',
            boxShadow:3,
            '&:hover .overlay': {
                opacity:1,
                transform:'translateY(0)',
            }
        }}>
            <Card 
                sx={{ 
                    transition: 'transform 0.3s', 
                    '&:hover': { transform: 'scale(1.02)' }, 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    boxShadow: 'none' // el boxShadow lo controla el contenedor
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'contain',
                        padding: 2
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ color: '#4f3cc9', fontWeight: 'bold', mb: 1 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2">Likes: 800</Typography>
                    <Typography variant="body2">Precio: ${price}</Typography>
                </CardContent>
            </Card>

            {/* Badge de Descuento */}
            {discount && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: '#ff5722', // Color naranja para destacar
                        color: 'white',
                        borderRadius: '4px',
                        padding: '2px 6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.3)'
                    }}
                >
                    <LocalOffer fontSize="small" />
                    {discount}% OFF
                </Box>
            )}

            {/* Overlay al hover */}
            <Box 
                className="overlay"
                sx={{
                    position:'absolute',
                    top:0,
                    left:0,
                    width:'100%',
                    height:'100%',
                    backgroundColor:'rgba(0,0,0,0.4)',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    opacity:0,
                    transform:'translateY(20%)',
                    transition:'all 0.3s ease-in-out',
                    p:2,
                    color:'#fff'
                }}
            >
                <Typography variant="body1" sx={{ mb:1, fontWeight:'bold' }}>Detalles</Typography>
                <Typography variant="body2" sx={{ mb:2, textAlign:'center' }}>{details}</Typography>
                <Box sx={{ display:'flex', gap:2 }}>
                    <FavoriteBorder sx={{ cursor:'pointer', '&:hover':{ color:'red', transform:'scale(1.2)', transition:'0.3s' }}} />
                    <InfoOutlined sx={{ cursor:'pointer', '&:hover':{ color:'#4f3cc9', transform:'scale(1.2)', transition:'0.3s' }}} />
                </Box>
            </Box>
        </Box>
    );
};
