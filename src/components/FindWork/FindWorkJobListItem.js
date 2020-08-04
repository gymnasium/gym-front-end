import React from 'react';

import { Box, PseudoBox, Text, useTheme } from '@chakra-ui/core';

import { getUrlForJob } from '../../utils/jobs';

const FindWorkJobListItem = ({ job }) => {
  const theme = useTheme();
  const jobUrl = getUrlForJob({ job });

  return (
    <Box
      key={job.jobId}
      borderBottom="1px solid #ccc"
      fontSize="0.9em"
      font="1em/1.15 'Helvetica Neue', Helvetica, Arial, sans-serif"
    >
      <PseudoBox
        as="a"
        href={jobUrl}
        target="_blank"
        rel="noopener noreferrer"
        display="block"
        position="relative"
        color={theme.colors.orange[400]}
        height="auto"
        padding="0.6em 1.2em 0.6em 0em"
        overflow="hidden"
        transition="0.2s padding-left ease-in-out"
        textDecoration="none"
        _hover={{
          color: theme.colors.orange[400],
          paddingLeft: '1.2em',
          '&:before': {
            display: 'inline-block',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            font: '1em/1 monospace, monospace',
            fontWeight: '900',
            color: theme.colors.orange[400],
            content: '"→"',
            height: 0,
            lineHeight: 0,
            margin: 'auto',
          },
        }}
        role="group"
      >
        <PseudoBox _groupHover={{ textDecoration: 'underline' }} as="dd">
          {job.title}
        </PseudoBox>
        <Text as="dt">{job.marketId}</Text>
      </PseudoBox>
    </Box>
  );
};

export default FindWorkJobListItem;
