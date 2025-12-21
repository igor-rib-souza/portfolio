import { Box, Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import mapImage from '@/assets/img/map.jpg';
import { useTranslation } from 'react-i18next';
import i18n from '@/setup/i18n';

interface LocationCardProps {
  address?: string;
}

const LocationCard = ({ address }: LocationCardProps) => {
  const [time, setTime] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString(i18n.language, {
        hour: '2-digit',
        minute: '2-digit',
      });

      const offset = -now.getTimezoneOffset() / 60;
      const sign = offset >= 0 ? '+' : '-';
      const gmt = `GMT${sign}${Math.abs(offset)}`;

      setTime(formattedTime);
      setTimeZone(gmt);
    };

    updateTime();
    const interval = setInterval(updateTime, 60_000);
    return () => clearInterval(interval);
  }, [i18n.language]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundImage: `url(${mapImage})`,
        backgroundSize: '400%',
        backgroundPosition: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        minHeight: 110,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.85))',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 3, md: 4 },
          py: { xs: 2, md: 3 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'common.white',
        }}
      >
        <Box
          sx={{
            textAlign: 'left',
          }}
        >
          {address && <Typography fontWeight={600}>{address}</Typography>}

          <Typography variant="body2" sx={{ opacity: 0.75, mt: 0.5 }}>
            {t('locationCard:local_time', { time, timeZone })}
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: 'common.white',

            '&::before': {
              content: '""',
              position: 'absolute',
              inset: -6,
              borderRadius: '50%',
              backgroundColor: 'common.white',
              opacity: 0.6,
              animation: 'pulse 1.5s infinite',
            },

            '@keyframes pulse': {
              '0%': {
                transform: 'scale(0.8)',
                opacity: 0.6,
              },
              '70%': {
                transform: 'scale(1.6)',
                opacity: 0,
              },
              '100%': {
                opacity: 0,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default memo(LocationCard);
