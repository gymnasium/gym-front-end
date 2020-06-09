import React, { useMemo, useState } from 'react';

import { H2 } from '@gymnasium/gym-ui';

import { findMarketById } from '../../../utils/markets';
import { getUrlForJob, getUrlForMarket } from '../../../utils/jobs';

import { JobList, MarketDropdown } from '../..';

import classes from './SidebarJobModule.module.css';

const JobListItem = job => {
  const jobUrl = getUrlForJob({ job });
  return (
    <div>
      <a href={jobUrl} target="_blank" rel="noopener noreferrer">
        <dt>{job.title}</dt>
        <dd>{job.marketId}</dd>
      </a>
    </div>
  );
};

const SidebarJobModule = () => {
  const [market, setMarket] = useState(10);

  const marketName = useMemo(() => {
    return findMarketById(market)?.name || '';
  }, [market]);

  return (
    <>
      <H2>Find Work</H2>
      <p className={classes.subtitle}>
        Find work that best fits your skills, in your area.
      </p>
      <MarketDropdown onChange={setMarket} value={market} />
      {marketName && (
        <p className={classes.viewingJobsIn}>
          Viewing jobs in <var>{marketName}</var>...
        </p>
      )}
      <div className={classes.jobList}>
        <JobList options={{ limit: 5 }} jobListItem={JobListItem} />
      </div>
      <div>
        <a
          href={getUrlForMarket(market)}
          className="text-center view-all-jobs"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all jobs in <var className="job-location">Boston</var> →
        </a>
      </div>
      <footer className={classes.footer} role="note">
        <p>
          <small>
            <b>Gym Jobs</b> is powered by{' '}
            <a href="https://aquent.com/find-work/">Aquent</a>, a leading talent
            agency, and makers of{' '}
            <a href="https://thegymnasium.com">Gymnasium</a>.
          </small>
        </p>
      </footer>
    </>
  );
};

export default SidebarJobModule;
