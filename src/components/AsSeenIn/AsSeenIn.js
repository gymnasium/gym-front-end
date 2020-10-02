import React from 'react';
import PropTypes from 'prop-types';
import { getImageUrl } from 'takeshape-routing';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { SimpleGrid } from '@chakra-ui/core';

import sortBy from 'lodash/sortBy';

import { H2 } from '@gymnasium/gym-ui';

import classes from './AsSeenIn.module.css';

const AsSeenIn = ({ items }) => (
  <div className={classes.container}>
    <H2 className={classes.title} textAlign="center">
      As Seen In:
    </H2>
    <SimpleGrid columns={[1, 2, 5]} alignItems="space-between">
      {sortBy(items, item => item.order).map((item, idx) => (
        <OutboundLink
          key={item._id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.featuredImage}
        >
          <img
            src={getImageUrl(item.publicationLogo.path)}
            alt={item.publicationLogo.title}
          />
        </OutboundLink>
      ))}
    </SimpleGrid>
  </div>
);

AsSeenIn.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      publicationLogo: PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string,
      }),
    })
  ),
};

export default AsSeenIn;
