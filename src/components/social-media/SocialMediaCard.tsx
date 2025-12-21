import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { memo } from 'react';
import { PURPLE } from '@/constants/colors';

const SocialMediaCard = () => {
  const github = 'https://github.com/igor-rib-souza';
  const linkedin = 'https://www.linkedin.com/in/rogi-rib/';
  const instagram = 'https://www.instagram.com/rogi_rib';
  const telegram = 'https://t.me/rogi';

  return (
    <Box
      sx={{
        maxHeight: 50,
        px: 4,
        borderRadius: 4,
        backgroundColor: '#0f0f0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
        minHeight: 110,
      }}
    >
      <IconButton
        component="a"
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        sx={iconStyle}
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>

      <IconButton
        component="a"
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        sx={iconStyle}
      >
        <GitHubIcon fontSize="large" />
      </IconButton>

      <IconButton
        component="a"
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        sx={iconStyle}
      >
        <InstagramIcon fontSize="large" />
      </IconButton>

      <IconButton
        component="a"
        href={telegram}
        target="_blank"
        rel="noopener noreferrer"
        sx={iconStyle}
      >
        <TelegramIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

const iconStyle = {
  color: 'common.white',
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'scale(1.15)',
    backgroundColor: 'rgba(255,255,255,0.08)',
    color: PURPLE,
  },
};

export default memo(SocialMediaCard);
