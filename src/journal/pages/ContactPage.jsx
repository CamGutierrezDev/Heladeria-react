// journal/pages/ContactPage.jsx
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

export const ContactPage = () => {
    return (
        <Box sx={{ maxWidth:600, mx:'auto', mt:4 }}>
            <Typography variant="h4" sx={{ mb:4, fontWeight:'bold', color:'primary.main', textAlign:'center' }}>Contacto</Typography>
            <Box component="form" sx={{ display:'flex', flexDirection:'column', gap:2 }}>
                <TextField label="Nombre" variant="outlined" />
                <TextField label="Correo" variant="outlined" />
                <TextField label="Mensaje" variant="outlined" multiline rows={4}/>
                <Button variant="contained" sx={{backgroundColor:'primary.main', '&:hover':{opacity:0.9}}}>Enviar Consulta</Button>
            </Box>

            <Grid container justifyContent="center" sx={{mt:3, gap:2}}>
                <Button component="a" href="https://facebook.com" sx={{color:'primary.main'}}>
                    Facebook
                </Button>
                <Button component="a" href="https://instagram.com" sx={{color:'primary.main'}}>
                    Instagram
                </Button>
                <Button component="a" href="https://tiktok.com" sx={{color:'primary.main'}}>
                    TikTok
                </Button>
            </Grid>
        </Box>
    );
};
