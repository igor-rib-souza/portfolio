import { useMediaQuery } from '@mui/material';

const useIsMobile = (): boolean => {
  return useMediaQuery(`(max-width:700px)`);
};

export default useIsMobile;
