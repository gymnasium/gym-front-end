import React, { useState, useMemo } from 'react';

import { H2 } from '@gymnasium/gym-ui';
import { Text } from '@chakra-ui/core';

import { findMarketById } from '../../utils/markets';
import { JobList, MarketDropdown } from '..';

import JobListItem from './FindWorkJobListItem';

const FindWork = () => {
  const [market, setMarket] = useState(10);

  const marketName = useMemo(() => {
    return findMarketById(market)?.name || '';
  }, [market]);

  return (
    <>
      <H2>Find Work</H2>

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
    </>
  );
};
export default FindWork;
