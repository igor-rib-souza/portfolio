import { memo } from 'react';
import { Box, Grid } from '@mui/material';
import PresentationCard from '@/components/presentation-card/PresentationCard';
import LocationCard from '@/components/location-card/LocationCard';
import QuoteCard from '@/components/quote-card/QuoteCard';
import ContactCard from '@/components/social-media/ContactCard';
import SocialMediaCard from '@/components/social-media/SocialMediaCard';
import WorkHistoryCard from '@/components/work-history/WorkHistoryCard';

const ThreeColumnLayout = () => {
  return (
    <Grid container spacing={2} sx={{ height: '100vh' }} p={2}>
      <Grid size={4} sx={{ height: '100%', display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            flexGrow: 1,
          }}
        >
          <PresentationCard />
          <LocationCard address="João Pessoa - PB, Brasil" />
        </Box>
      </Grid>

      <Grid size={4} sx={{ height: '100%', display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            flexGrow: 1,
          }}
        >
          <QuoteCard />
          <ContactCard />
        </Box>
      </Grid>

      <Grid size={4} sx={{ height: '100%', display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            flexGrow: 1,
          }}
        >
          <SocialMediaCard />
          <WorkHistoryCard />
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(ThreeColumnLayout);
