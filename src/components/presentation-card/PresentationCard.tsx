import { SKILLS } from '@/constants/skills';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import backgroundImage from '@/assets/img/me.jpg';
import { calculateAge } from '@/utils/utils';
import LanguageToggleButton from './LanguageToggleButton';
import { useTranslation, Trans } from 'react-i18next';

const userName = 'rogi_rib';
const name = 'Igor Souza';
const birthDate = '06/04/2002';

const age = calculateAge(birthDate);
const skillsWithAge = [`${age} y.o.`, ...SKILLS];

const PresentationCard = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 425, md: 425, xl: 600 },
        borderRadius: 4,
        overflow: 'hidden',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 2,
        }}
      >
        <LanguageToggleButton />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3))',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          padding: { xs: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          color: 'common.white',

          textAlign: { xs: 'center', md: 'left' },
          alignItems: { xs: 'center', md: 'flex-start' },

          minHeight: 'inherit',
        }}
      >
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          @{userName}
        </Typography>

        <Typography variant="h5" fontWeight={800} lineHeight={1.1} sx={{ mt: 1 }}>
          {t('presentationCard:hello')} <br />
          {t('presentationCard:who_am_i', { name })}
        </Typography>

        <Typography
          sx={{
            mt: 2,
            opacity: 0.9,
          }}
        >
          <Trans i18nKey="presentationCard:description" />
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          sx={{
            mt: 3,
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          {skillsWithAge.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              variant="outlined"
              sx={{
                color: 'common.white',
                borderColor: 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default memo(PresentationCard);
