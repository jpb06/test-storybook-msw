import { Box, Grid, Skeleton } from '@mui/material';

import { ListItemSkeleton } from './ListItemSkeleton';

export const ListSkeleton = () => (
  <Box sx={{ bgcolor: 'background.paper' }}>
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="start"
      sx={{ ml: 2 }}
    >
      <Grid item>
        <Skeleton
          animation="wave"
          variant="text"
          width={50}
          height={20}
          sx={{ mt: 2, mb: 3 }}
        />
      </Grid>
      <ListItemSkeleton />
      <ListItemSkeleton />
      <ListItemSkeleton />
    </Grid>
  </Box>
);
