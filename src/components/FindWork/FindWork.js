import React, { useState, useMemo } from 'react';

import { Text, useTheme } from '@chakra-ui/core';

import { findMarketById } from '../../utils/markets';
import { JobList, MarketDropdown, TabbedContainer } from '..';

import JobListItem from './FindWorkJobListItem';

const FindWork = () => {
  const [market, setMarket] = useState(10);

  const marketName = useMemo(() => {
    return findMarketById(market)?.name || '';
  }, [market]);

  const theme = useTheme();

  return (
    <TabbedContainer
      title="Find Work"
      backgroundColor={theme.colors.gymnasium.darkGray}
      color={theme.colors.gymnasium.white}
    >
      <p>Find work that best fits your skills, in your area.</p>
      <MarketDropdown onChange={setMarket} value={market} />

      <Text as="p" margin="1rem 0" fontWeight="bold">
        {marketName && `Viewing jobs in ${marketName}...`}
      </Text>
      <JobList
        showPagination
        options={{ marketId: market }}
        jobListItem={JobListItem}
      />
    </TabbedContainer>
  );
};
export default FindWork;
