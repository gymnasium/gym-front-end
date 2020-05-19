import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import JobListItem from './JobListItem';
import { useJobs } from '../../utils/jobs';

const JobList = ({ options = {}, jobListItem }) => {
  const [page, setPage] = useState(0);

  const { remoteOnly, marketId } = options;

  useEffect(() => {
    setPage(0);
  }, [remoteOnly, marketId, setPage]);

  const { status, latestData, resolvedData, isFetching, error } = useJobs({
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
          <ul>
            {
              resolvedData.map(job => jobListItem ?
                jobListItem(job) :
                <JobListItem job={job} key={job.jobId} />
              )
            }
          </ul>
        )}
        <div>{page}</div>
        <button
          disabled={status === 'loading' || status === 'error' || page === 0}
          onClick={() => setPage(old => Math.max(old - 1, 0))}
          type="button"
        >
          Previous
        </button>
        <button
          disabled={status === 'loading' || status === 'error' || !latestData}
          onClick={() => {
            // Here, we use `latestData` so the Next Page
            // button isn't relying on potentially old data
            setPage(old => (!latestData ? old : old + 1));
          }}
          type="button"
        >
          Next
        </button>
        {
          // Since the last page's data potentially sticks around between page requests,
          // we can use `isFetching` to show a background loading
          // indicator since our `status === 'loading'` state won't be triggered
          isFetching ? <span> Loading...</span> : null
        }
      </header>
    </section>
  );
};

JobList.propTypes = {
  // jobs: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

export default JobList;
