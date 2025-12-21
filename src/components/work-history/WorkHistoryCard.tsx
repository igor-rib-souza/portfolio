import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import WorkHistoryItem from './WorkHistoryItem';

import cyanLogo from '@/assets/img/cyan_agroanalytics_logo.jpg';
import pactoMaisLogo from '@/assets/img/pacto-mais.png';
import reactLogo from '@/assets/img/react_logo.png';

import { useTranslation } from 'react-i18next';
import type { WorkHistoryItemData } from '@/types/WorkHistoryItemData';

const WorkHistoryCard = () => {
  const { t } = useTranslation();

  const personalWorkExperiences: WorkHistoryItemData[] = [
    {
      imagePath: reactLogo,
      url: 'https://github.com/igor-rib-souza/portfolio',
      title: t('workHistoryCard:portfolio'),
      description: t('workHistoryCard:work_experience.personal.portfolio'),
      stack: ['Typescript', 'React', 'MUi', 'Vite', 'i18n'],
    },
  ];

  const professionalWorkExperiences: WorkHistoryItemData[] = [
    {
      imagePath: cyanLogo,
      url: 'https://www.cyan-agro.com.br/',
      title: 'Cyan Agroanalytics',
      description: t('workHistoryCard:work_experience.professional.cyan'),
      stack: ['Typescript', 'React', 'Vite', 'Vitest', 'MUi', 'OpenLayers', 'i18n'],
    },
    {
      imagePath: pactoMaisLogo,
      url: 'https://www.pactomais.com.br/',
      title: 'Pacto Mais',
      description: t('workHistoryCard:work_experience.professional.pacto'),
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
        //minHeight: { xs: 425, md: 425, xl: 600 },
        height: '100%',
      }}
    >
      <Typography sx={{ padding: '16px 16px 0px 16px' }}>
        {t('workHistoryCard:professional')}
      </Typography>
      {professionalWorkExperiences.map((workExperience, index) => (
        <WorkHistoryItem
          key={index}
          imagePath={workExperience.imagePath}
          url={workExperience.url}
          description={workExperience.description}
          title={workExperience.title}
          stack={workExperience.stack}
        />
      ))}
      <Typography sx={{ padding: '16px 16px 0px 16px' }}>
        {t('workHistoryCard:personal')}
      </Typography>
      {personalWorkExperiences.map((workExperience, index) => (
        <WorkHistoryItem
          key={index}
          imagePath={workExperience.imagePath}
          url={workExperience.url}
          description={workExperience.description}
          title={workExperience.title}
          stack={workExperience.stack}
        />
      ))}
    </Box>
  );
};

export default memo(WorkHistoryCard);
