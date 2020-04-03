import React from 'react';
import PropTypes from 'prop-types';
import { getImageUrl } from 'takeshape-routing';
import { Col, Row } from 'react-bootstrap';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import sortBy from 'lodash/sortBy';

import { H2 } from '@gymnasium/gym-ui';

import classes from './AsSeenIn.module.css';

const AsSeenIn = ({ items }) => (
  <div className={classes.container}>
    <H2 className={classes.title} textAlign="center">
      As Seen In:
    </H2>
    <Row noGutters>
      <Col xs={12}>
        <Row noGutters>
          {sortBy(items, item => item.order).map((item, idx) => (
            <Col
              className="text-center"
              key={item._id}
              xs={12}
              sm={4}
              lg={{ span: 2, offset: idx === 0 ? 1 : 0 }}
            >
              <OutboundLink
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
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
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
