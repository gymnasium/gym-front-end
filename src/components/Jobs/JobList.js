import React, { useEffect, useState } from 'react';

import JobListItem from './JobListItem';
import { useJobs } from '../../utils/jobs';

import classes from './JobList.module.css';

const JobList = ({
  options = {},
  jobListItem: JobListItemElement,
  showPagination,
}) => {
  const [page, setPage] = useState(0);

  const { remoteOnly, marketId } = options;

  useEffect(() => {
    setPage(0);
  }, [remoteOnly, marketId, setPage]);

  const {
    error,
    isFetching,
    latestData,
    pageSize,
    resolvedData,
    status,
  } = useJobs({
    ...options,
    page,
  });

  // eslint-disable-next-line no-console
  if (error) console.error('Error loading jobs:', error);

  return (
    <section>
      <header>
        {status === 'error' && <span>(something went wrong)</span>}
        {status === 'success' && (
          <dl>
            {resolvedData.map(job =>
              JobListItemElement ? (
                <JobListItemElement job={job} key={job.jobId} />
              ) : (
                <JobListItem job={job} key={job.jobId} />
              )
            )}
          </dl>
        )}
        {!!showPagination && (
          <div className={classes.controlRow}>
            <button
              disabled={
                status === 'idle' ||
                status === 'loading' ||
                status === 'error' ||
                page === 0
              }
              onClick={() => setPage(old => Math.max(old - 1, 0))}
              type="button"
              className={classes.linkButton}
            >
              Previous
            </button>

            <div className={classes.pageNumber}>
              {
                // Since the last page's data potentially sticks around between page requests,
                // we can use `isFetching` to show a background loading
                // indicator since our `status === 'loading'` state won't be triggered
                isFetching ? <span> Loading...</span> : `Page ${page + 1}`
              }
            </div>

            <button
              disabled={
                status === 'idle' ||
                status === 'loading' ||
                status === 'error' ||
                resolvedData.length < pageSize ||
                !latestData
              }
              onClick={() => {
                // Here, we use `latestData` so the Next Page
                // button isn't relying on potentially old data
                setPage(old => (!latestData ? old : old + 1));
              }}
              type="button"
              className={classes.linkButton}
            >
              Next
            </button>
          </div>
        )}
      </header>
    </section>
  );
};

JobList.propTypes = {
  // jobs: PropTypes.arrayOf(PropTypes.shape({})),
};

export default JobList;
