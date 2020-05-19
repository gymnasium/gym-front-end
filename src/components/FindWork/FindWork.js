import React, { useState } from 'react';

import { H2 } from '@gymnasium/gym-ui';

import { JobList, MarketDropdown } from '..';

const FindWork = () => {
  const [market, setMarket] = useState(10);
  return (
    <>
      <H2>Find Work</H2>

      <p>Find work that best fits your skills, in your area.</p>
      <MarketDropdown onChange={setMarket} value={market} />

      <div>Market: {market}</div>
      <JobList options={{ marketId: market }} />
    </>
  );
};
export default FindWork;
