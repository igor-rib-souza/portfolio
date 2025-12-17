import { Box, Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import mapImage from '@/assets/map.jpg';

interface LocationCardProps {
  address?: string;
  label: string;
}

const LocationCard = ({ address, label }: LocationCardProps) => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      });

      const offset = -now.getTimezoneOffset() / 60;
      const sign = offset >= 0 ? '+' : '-';
      const gmt = `GMT${sign}${Math.abs(offset)}`;

      setTimeString(`${time} ${gmt}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: { md: 520 },
        borderRadius: 3,
        overflow: 'hidden',
        backgroundImage: `url(${mapImage})`,
        backgroundSize: '400%',
        backgroundPosition: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        minHeight: 96,
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
            {timeString} {label}
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
