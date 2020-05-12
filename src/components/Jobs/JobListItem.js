import React from 'react';

const JobListItem = ({ job }) => {
  return (
    <li>
      {job.title} - {job.marketId}
    </li>
  );
};

export default JobListItem;
