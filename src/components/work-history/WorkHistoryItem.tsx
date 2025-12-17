import { Box, Typography } from '@mui/material';
import { memo, useState } from 'react';
import WorkHistoryModal from './WorkHistoryModal';
import type { WorkHistoryItemData } from '@/types/WorkHistoryItemData';
import { PURPLE } from '@/constants/colors';

const WorkHistoryItem = (data: WorkHistoryItemData) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        onClick={() => setOpen(true)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'left',
          gap: 2,
          p: 2,
          borderRadius: 3,
          cursor: 'pointer',
          transition: 'background-color 0.2s ease, transform 0.1s ease',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.04)',
          },
          '&:hover .MuiTypography-root': {
            color: PURPLE,
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
        }}
      >
        <Box
          component="img"
          src={data.imagePath}
          alt={data.title}
          sx={{
            width: 70,
            height: 70,
            borderRadius: 2,
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />

        <Box sx={{ minWidth: 0 }}>
          <Typography
            fontWeight={600}
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {data.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {data.description}
          </Typography>
        </Box>
      </Box>

      <WorkHistoryModal open={open} onClose={() => setOpen(false)} data={data} />
    </>
  );
};

export default memo(WorkHistoryItem);
