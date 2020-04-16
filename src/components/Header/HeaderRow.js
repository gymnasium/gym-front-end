import React from 'react';
import PropTypes from 'prop-types';

import { Col, Container, Row } from 'react-bootstrap';

import baseClasses from './Header.module.css';

const HeaderRow = ({ backgroundColor, classes: inputClasses, children }) => {
  const classes = {
    ...baseClasses,
    ...inputClasses,
  };

  const styles = {
    headerRowContainer: {
      backgroundColor,
    },
  };

  return (
    <Container
      fluid
      className={classes['header-row-container']}
      style={styles.headerRowContainer}
    >
      <Container id="primary-nav-bottom">
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </Container>
  );
};

HeaderRow.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.shape({}),
};

export default HeaderRow;
