import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { JobListItem } from '.';
import { useJobs } from '../../utils/jobs';

const JobList = ({ options, title }) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [options.remoteOnly, setPage]);

  const { status, jobs, error } = useJobs({
    ...options,
    page,
  });

  // eslint-disable-next-line no-console
  if (error) console.error('Error loading jobs:', error);

  return (
    <section>
      <header>
        <h3>{title || 'Jobs'}</h3>
        {status === 'loading' && <span>Loading...</span>}
        {status === 'error' && <span>(something went wrong)</span>}
        {status === 'success' && (
          <ul>
            {jobs.map(job => (
              <JobListItem job={job} key={job.jobId} />
            ))}
          </ul>
        )}
        <button
          disabled={status === 'loading' || status === 'error'}
          onClick={() => setPage(page - 1)}
          type="button"
        >
          Previous
        </button>
        <span>Page: {page}</span>
        <button
          disabled={status === 'loading' || status === 'error'}
          onClick={() => setPage(page + 1)}
          type="button"
        >
          Next
        </button>
      </header>
    </section>
  );
};

JobList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

export default JobList;
