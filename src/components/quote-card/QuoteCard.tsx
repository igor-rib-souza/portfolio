import { Box, Typography } from '@mui/material';
import { memo } from 'react';
//import gifBackground from '@/assets/background.gif';

const QuoteCard = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 425, md: 425, xl: 600 },
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        //backgroundImage: `url(${gifBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: { xs: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.6)',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          position: 'relative',
          zIndex: 1,
          fontWeight: 600,
          fontSize: { xs: '1rem', md: '1.25rem' },
          px: 4,
          maxWidth: 600,
          animation: 'fadeIn 1.5s ease',
        }}
      >
        “Não se pode criar experiência, <br />
        É preciso passar por ela.”
        <br />- Albert Camus
      </Typography>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default memo(QuoteCard);
