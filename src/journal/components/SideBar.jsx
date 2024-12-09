// journal/components/SideBar.jsx
import { Box, Divider, List, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({ displayName }) => {
    const { notes } = useSelector(state => state.journal);
    return (
        <Box
            sx={{ 
                textAlign: 'center', 
                backgroundColor: '#EC69B0', 
                height: '100%',
                '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                animation: 'fadeIn 0.5s ease-in-out',
                color: '#fff'
            }}
        >
            <Typography variant='h6' sx={{ my: 2, fontWeight: 'bold' }}>
                { displayName || 'Journal' }
            </Typography>
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)' }} />

            <List>
                { notes.map(note => (
                    <SideBarItem key={note.id} {...note} />
                )) }
            </List>
        </Box>
    );
};
