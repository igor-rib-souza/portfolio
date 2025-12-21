import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import backgroundImage from '@/assets/img/albert-camus.webp';

const QuoteCard = () => {
  useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />

      <Typography
        variant="h6"
        sx={{
          position: 'relative',
          zIndex: 1,
          fontWeight: 600,
          fontSize: { xs: '1rem', md: '1.25rem' },
          color: '#fff',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Trans i18nKey="quoteCard:quote" />
        <br />– Albert Camus
      </Typography>
    </Box>
  );
};

export default memo(QuoteCard);
