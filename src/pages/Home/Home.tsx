import { memo } from 'react';
import PresentationCard from '../../components/presentation-card/PresentationCard';
import LocationCard from '@/components/location-card/LocationCard';
import { Box, Grid } from '@mui/material';
import SocialMediaCard from '@/components/social-media/SocialMediaCard';
import WorkHistoryCard from '@/components/work-history/WorkHistoryCard';
import QuoteCard from '@/components/quote-card/QuoteCard';
import ContactCard from '@/components/social-media/ContactCard';

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <PresentationCard />
          <LocationCard address="João Pessoa - PB, Brasil" label="Horário local" />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <QuoteCard />
          <ContactCard />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <SocialMediaCard />
          <WorkHistoryCard />
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(Home);
