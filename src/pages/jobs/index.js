import React, { useState } from 'react';

import { Layout, JobList } from '../../components';

const JobsPage = () => {
  const [showRemoteJobs, setShowRemoteJobs] = useState(false);

  const handleRemoteJobsFlagChanged = event => {
    setShowRemoteJobs(event.target.checked);
  };

  return (
    <Layout>
      <form>
        <input
          checked={showRemoteJobs}
          onChange={handleRemoteJobsFlagChanged}
          type="checkbox"
          label="Only show remote jobs"
        />
      </form>
      <h2>Remote jobs</h2>
      <JobList
        options={{
          remoteOnly: showRemoteJobs,
        }}
      />
    </Layout>
  );
};

export default JobsPage;
