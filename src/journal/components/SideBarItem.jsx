// journal/components/SideBarItem.jsx
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }));
    }

    const newTitle = useMemo(() => {
        return title.length > 17 ? `${title.substring(0, 17)}...` : title;
    }, [title]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote} sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                <ListItemIcon>
                    <TurnedInNot sx={{ color: '#fff' }} />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} sx={{ color: '#fff' }} />
                    <ListItemText secondary={body} sx={{ color: 'rgba(255,255,255,0.7)' }} />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
