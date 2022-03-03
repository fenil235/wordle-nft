import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import './local-loader.scss';

const LocalLoader = (props) => {
  return (
    <>
      {props.loader ? (
        <div className="local-loader">
          <div className="spinner">
            <Spin />
          </div>
        </div>
      ) : null}
    </>
  );
};

LocalLoader.propTypes = {
  loader: PropTypes.bool,
};

LocalLoader.defaultProps = {
  loader: false,
};

export default LocalLoader;
