import React, { useState, useMemo } from 'react';

import { H2 } from '@gymnasium/gym-ui';

import { findMarketById } from '../../utils/markets';
import { getUrlForJob } from '../../utils/jobs';

import { JobList, MarketDropdown } from '..';

import classes from './FindWork.module.css';

const JobListItem = job => {
  const jobUrl = getUrlForJob({ job });
  return (
    <li className={classes.jobListing}>
      <a href={jobUrl} target="_blank" rel="noopener noreferrer">
        <div className={`row ${classes.jobPost}`}>
          <b className={`col-8 ${classes.jobTitle}`}>{job.title}</b>
          <em className={`{col-2 ${classes.jobMarket}`}>{job.marketId}</em>
        </div>
      </a>
    </li>
  );
};

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

      <p className={classes.viewingJobsIn}>
        {marketName && `Viewing jobs in ${marketName}...`}
      </p>
      <JobList options={{ marketId: market }} jobListItem={JobListItem} />
    </>
  );
};
export default FindWork;
