import React from 'react';
import PropTypes from 'prop-types';
import { getImageUrl } from 'takeshape-routing';
import { Col, Row } from 'react-bootstrap';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import classes from './AsSeenIn.module.css';
import { Title } from '..';

const AsSeenIn = ({ items }) => (
  <div>
    <Title className={classes.title}>As Seen In:</Title>
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <Row>
          {items.reverse().map(item => (
            <Col className="text-center" key={item._id}>
              <OutboundLink
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
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
