import { Box, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';
import { memo } from 'react';

const ContactCard = () => {
  const whatsapp = 'https://api.whatsapp.com/send/?phone=5583987157630';
  const cvPT = 'https://drive.google.com/file/d/1ucaHyU5VmkqlOnQC_LdsfJ3Gg-g5WLYt/view?usp=sharing';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cvEN = 'https://drive.google.com/file/d/1ae3J387EhOiLF4W1oGi8OLyuTEkrHDzQ/view?usp=sharing';

  return (
    <Box
      sx={{
        px: 4,
        borderRadius: 4,
        backgroundColor: '#0f0f0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
        flexWrap: 'wrap',
        minHeight: 96,
      }}
    >
      <Button
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        startIcon={<WhatsAppIcon />}
        sx={{
          backgroundColor: 'common.white',
          color: '#111',
          fontWeight: 600,
          borderRadius: 999,
          textTransform: 'none',
          px: 3,
          '&:hover': {
            backgroundColor: '#f2f2f2',
          },
        }}
      >
        Entre em contato
      </Button>

      <Button
        href={cvPT}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        startIcon={<DownloadIcon />}
        sx={{
          backgroundColor: '#2b2b2b',
          color: 'common.white',
          fontWeight: 600,
          borderRadius: 999,
          textTransform: 'none',
          px: 3,
          '&:hover': {
            backgroundColor: '#444',
          },
        }}
      >
        CV
      </Button>
    </Box>
  );
};

export default memo(ContactCard);
