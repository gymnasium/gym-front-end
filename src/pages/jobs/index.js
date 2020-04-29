import React from 'react';

import { Layout } from '../../components';
import { useJobs } from '../../utils/jobs';

const JobsPage = () => {
  const { status, jobs, error } = useJobs({
    limit: 100,
  });

  if (status === 'loading') {
    return (
      <Layout>
        <span>Loading...</span>
      </Layout>
    );
  }

  if (status === 'error') {
    return (
      <Layout>
        <span>Error: {error.message}</span>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Jobs</h1>
      <ul>
        {jobs.map(job => {
          return (
            <li key={job.jobId}>
              <h1>{job.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: job.description }} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default JobsPage;
