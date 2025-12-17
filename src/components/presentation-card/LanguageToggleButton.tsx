import { Box, IconButton } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import br from '@/assets/svg/br.svg';
import us from '@/assets/svg/us.svg';

const FLAGS = {
  pt: br,
  en: us,
};

const LanguageToggleButton = () => {
  const { i18n } = useTranslation();
  const normalizedLanguage = i18n.language.split('-')[0] as keyof typeof FLAGS;

  const handleToggleLanguage = useCallback(() => {
    const nextLanguage = normalizedLanguage === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(nextLanguage);
  }, [normalizedLanguage, i18n]);

  return (
    <IconButton
      onClick={handleToggleLanguage}
      disableRipple
      disableFocusRipple
      disableTouchRipple
      sx={{
        padding: 0,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        outline: 'none',
        transition: 'transform 0.2s ease',

        '&:hover': {
          backgroundColor: 'transparent',
          transform: 'scale(1.05)',
        },

        '&:active': {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },

        '&:focus': {
          outline: 'none',
          boxShadow: 'none',
          backgroundColor: 'transparent',
        },

        '&:focus-visible': {
          outline: 'none',
          boxShadow: 'none',
          backgroundColor: 'transparent',
        },
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={FLAGS[normalizedLanguage]}
          alt="Change language"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
    </IconButton>
  );
};

export default memo(LanguageToggleButton);
