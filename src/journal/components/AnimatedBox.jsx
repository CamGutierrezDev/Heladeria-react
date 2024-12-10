// journal/components/AnimatedBox.jsx
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

export const AnimatedBox = ({ children, ...props }) => {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            {...props}
        >
            {children}
        </Box>
    );
};
