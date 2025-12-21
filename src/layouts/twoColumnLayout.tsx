import { memo } from 'react';
import { Box, Grid } from '@mui/material';
import PresentationCard from '@/components/presentation-card/PresentationCard';
import LocationCard from '@/components/location-card/LocationCard';
import ContactCard from '@/components/social-media/ContactCard';
import SocialMediaCard from '@/components/social-media/SocialMediaCard';
import WorkHistoryCard from '@/components/work-history/WorkHistoryCard';

const TwoColumnLayout = () => {
  return (
    <Grid container spacing={2} p={2} sx={{ height: '100vh' }}>
      <Grid size={6} sx={{ height: '100%', display: 'flex' }}>
        <Box display="flex" flexDirection="column" gap={2} sx={{ flexGrow: 1, height: '100%' }}>
          <PresentationCard />
          <LocationCard address="João Pessoa - PB, Brasil" />
          <ContactCard />
        </Box>
      </Grid>

      <Grid size={6} sx={{ height: '100%', display: 'flex' }}>
        <Box display="flex" flexDirection="column" gap={2} sx={{ flexGrow: 1, height: '100%' }}>
          <SocialMediaCard />
          <WorkHistoryCard />
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(TwoColumnLayout);
