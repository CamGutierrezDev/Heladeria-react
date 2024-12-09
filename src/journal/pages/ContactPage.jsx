// journal/pages/ContactPage.jsx
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import faceIcon from '../assets/SVG/face.svg';
import instaIcon from '../assets/SVG/insta.svg';
import tiktokIcon from '../assets/SVG/tiktok.svg';

export const ContactPage = () => {
    return (
        <Box sx={{ maxWidth:600, mx:'auto', mt:4 }}>
            <Typography variant="h4" sx={{ mb:4, fontWeight:'bold', color:'primary.main', textAlign:'center' }}>
                Contacto
            </Typography>
            <Box component="form" sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                <TextField label="Nombre" variant="outlined" />
                <TextField label="Correo" variant="outlined" />
                <TextField label="Mensaje" variant="outlined" multiline rows={4}/>
                <Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor:'primary.main', 
                        '&:hover':{opacity:0.9, transform:'scale(1.02)', transition:'0.3s'}
                    }}
                >
                    Enviar Consulta
                </Button>
            </Box>

            <Grid container justifyContent="center" sx={{mt:3, gap:2}}>
                {[{icon:faceIcon, link:'https://facebook.com'},
                  {icon:instaIcon, link:'https://instagram.com'},
                  {icon:tiktokIcon, link:'https://tiktok.com'}].map((social, idx) => (
                    <Box 
                        key={idx} 
                        component="a" 
                        href={social.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            width:50,
                            height:50,
                            borderRadius:'50%',
                            backgroundColor:'#EC69B0',
                            color:'#464cc3',
                            '&:hover': {
                                transform:'scale(1.1)',
                                transition:'transform 0.3s ease-in-out',
                                backgroundColor:'#d6589d'
                            }
                        }}
                    >
                        <Box 
                            component="img" 
                            src={social.icon} 
                            alt="social icon" 
                            sx={{
                                width:44, height:44, 
                              
                            }}
                        />
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};
