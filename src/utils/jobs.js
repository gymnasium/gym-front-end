import axios from 'axios';
import { useQuery } from 'react-query';

export const fetchJobs = async (key, { cwids, limit, marketId, page }) => {
  const remoteQuery =
    '+(AquentJob.offsitePreference:2%20AquentJob.offsitePreference:3)';

  let marketQuery = '';
  if (marketId) marketQuery = `%20+AquentJob.locationId:${marketId}`;

  let limitQuery = '';
  if (limit) limitQuery = `/limit/${limit}`;

  let pageQuery = '';
  if (page) pageQuery = `/offset/${page}`;

  let minorSegmentQuery = '';
  if (Array.isArray(cwids) && cwids.length > 0) {
    // to search for a list of minor segments, we need to provide it to the ODATA api in
    // the following format:
    // (ID1%20ID2%20)
    // basically, this is a list of IDs, separated by %20, and wrapped in Parenthesis
    const minorSegmentList = cwids.reduce(
      (accumulator, segment) => `${accumulator}%20${segment}`
    );

    minorSegmentQuery = `%20+AquentJob.minorSpecialty1:(${minorSegmentList})`;
  }

  const urlBase = `https://aquent.com/api/content/render/false/type/json/query/+contentType:AquentJob%20${remoteQuery}+AquentJob.isPosted:true%20+languageId:1%20+deleted:false%20+working:true`;
  const urlPageLimitSuffix = `/orderby/AquentJob.postedDate%20desc${limitQuery}${pageQuery}`;

  const apiUrl = `${urlBase}${marketQuery}${minorSegmentQuery}${urlPageLimitSuffix}`;

  const response = await axios.get(apiUrl);
  return response.data.contentlets;
};

export const useJobs = options => {
  const { status, data, error } = useQuery(['jobs', options], fetchJobs);
  return { status, jobs: data, error };
};
