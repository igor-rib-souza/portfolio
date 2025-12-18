import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import WorkHistoryItem from './WorkHistoryItem';

import cyanLogo from '@/assets/img/cyan_agroanalytics_logo.jpg';
import pactoMaisLogo from '@/assets/img/pacto-mais.png';
import { useTranslation } from 'react-i18next';

const WorkHistoryCard = () => {
  const { t } = useTranslation();

  const workExperiences = [
    {
      imagePath: cyanLogo,
      enterpriseUrl: 'https://www.cyan-agro.com.br/',
      title: 'Cyan Agroanalytics',
      description: t('workHistoryCard:work_experience.cyan'),
      stack: ['Typescript', 'React', 'Vite', 'Vitest', 'MUi', 'OpenLayers'],
    },
    {
      imagePath: pactoMaisLogo,
      enterpriseUrl: 'https://www.pactomais.com.br/',
      title: 'Pacto Mais',
      description: t('workHistoryCard:work_experience.pacto'),
      stack: [
        'Typescript',
        'Angular',
        'Java',
        'SpringBoot',
        'MySql',
        'Jmeter',
        'YOLO',
        'Tesseract',
      ],
    },
  ];

  return (
    <Box
      sx={{
        px: 4,
        py: { xs: 3, md: 4 },
        borderRadius: 4,
        backgroundColor: '#0f0f0f',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
        textAlign: 'left',
        minHeight: { xs: 425, md: 425, xl: 600 },
      }}
    >
      <Typography sx={{ padding: '16px 16px 0px 16px' }}>PROFISSIONAL</Typography>
      {workExperiences.map((workExperience, index) => (
        <WorkHistoryItem
          key={index}
          imagePath={workExperience.imagePath}
          enterpriseUrl={workExperience.enterpriseUrl}
          description={workExperience.description}
          title={workExperience.title}
          stack={workExperience.stack}
        />
      ))}
    </Box>
  );
};

export default memo(WorkHistoryCard);
