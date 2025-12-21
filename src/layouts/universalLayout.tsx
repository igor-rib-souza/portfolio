import { memo } from 'react';

import useIsMobile from '@/hooks/useIsMobile';
import useIsCompact from '@/hooks/useIsCompact';
import OneColumnLayout from './oneColumnLayout';
import TwoColumnLayout from './twoColumnLayout';
import ThreeColumnLayout from './threeColumnLayout';

const UniversalLayout = () => {
  const isMobile = useIsMobile();
  const isCompact = useIsCompact();

  if (isMobile) {
    return <OneColumnLayout />;
  }

  if (isCompact) {
    return <TwoColumnLayout />;
  }

  return <ThreeColumnLayout />;
};

export default memo(UniversalLayout);
