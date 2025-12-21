import { useMediaQuery } from '@mui/material';

const useIsCompact = (): boolean => {
  return useMediaQuery(`(max-width:1024px)`);
};

export default useIsCompact;
