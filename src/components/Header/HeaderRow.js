import React from 'react';
import PropTypes from 'prop-types';

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
    <div
      className={`container-fluid ${classes['header-row-container']}`}
      style={styles.headerRowContainer}
    >
      <div className="container" id="primary-nav-bottom">
        <div className="row">
          <div className="col-xs-12">{children}</div>
        </div>
      </div>
    </div>
  );
};

HeaderRow.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.shape({}),
};

export default HeaderRow;
