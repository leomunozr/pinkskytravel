import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';

interface LelePlaceholderProps {
  sx?: SxProps<Theme>;
  message?: string;
  className?: string; // Kept for compatibility if passed, but prefer sx
}

const LelePlaceholder: React.FC<LelePlaceholderProps> = ({ sx, message }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        border: '2px dashed',
        borderColor: 'secondary.main',
        borderRadius: 2,
        bgcolor: '#fce4ec', // pink[50] roughly
        ...sx,
      }}
    >
      <Box
        sx={{
          width: 96,
          height: 96,
          mb: 1,
          bgcolor: '#f48fb1', // pink[200]
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" component="span" role="img" aria-label="Lele Mascot">
          🎎
        </Typography>
      </Box>
      <Typography variant="subtitle1" fontWeight="bold" color="primary.main" align="center">
        {message || "Aquí va Lele"}
      </Typography>
      <Typography variant="caption" color="text.secondary" align="center">
        (Espacio reservado para SVG)
      </Typography>
    </Box>
  );
};

export default LelePlaceholder;
