import { Box, Typography, Modal, Chip, Stack, Link } from '@mui/material';
import { memo } from 'react';
import type { WorkHistoryItemData } from '@/types/WorkHistoryItemData';

interface WorkHistoryModalProps {
  open: boolean;
  onClose: () => void;
  data: WorkHistoryItemData;
}

const WorkHistoryModal = ({ open, onClose, data }: WorkHistoryModalProps) => {
  const { imagePath, title, description, stack, enterpriseUrl } = data;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: 600,
          bgcolor: '#0f0f0f',
          color: 'common.white',
          borderRadius: 4,
          boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
          p: 4,
          outline: 'none',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
          }}
        >
          <Box
            component="img"
            src={imagePath}
            alt={title}
            sx={{
              width: 80,
              height: 80,
              borderRadius: 2,
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />

          <Box>
            <Typography variant="h6" fontWeight={700}>
              {title}
            </Typography>

            <Typography
              sx={{
                mt: 1,
                opacity: 0.85,
                lineHeight: 1.6,
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" sx={{ opacity: 0.6, mb: 0.5 }}>
            Site
          </Typography>

          <Link
            href={enterpriseUrl}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              color: '#6366F1',
              fontWeight: 500,
              wordBreak: 'break-all',
            }}
          >
            {enterpriseUrl}
          </Link>
        </Box>

        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
          {stack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              sx={{
                bgcolor: 'rgba(255,255,255,0.08)',
                color: 'common.white',
              }}
            />
          ))}
        </Stack>
      </Box>
    </Modal>
  );
};

export default memo(WorkHistoryModal);
