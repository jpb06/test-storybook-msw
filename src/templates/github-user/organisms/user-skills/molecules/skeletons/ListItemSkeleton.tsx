import { Grid, Skeleton } from '@mui/material';

export const ListItemSkeleton = () => (
  <Grid item>
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
      sx={{ mb: 2 }}
    >
      <Skeleton
        animation="wave"
        variant="circular"
        width={30}
        height={30}
        sx={{ mr: 3 }}
      />
      <Skeleton animation="wave" variant="text" width={120} height={25} />
    </Grid>
  </Grid>
);
