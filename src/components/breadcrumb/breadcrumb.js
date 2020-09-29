import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { parentSiteUrl } from '../../../site-config';
import Icon from '../../images/icon.png';

const Breadcrumbs = ({ location, crumbLabel }) => {
  return (
    <div className="breadcrumb-container">
      <div className="mx-6 mb-3 breadcrumb">
        <a href={parentSiteUrl}>
          <img alt={'SSW Consulting'} src={Icon} className="w-4" />
        </a>
        <span className="breadcrumb__separator">&gt;</span>
        <Breadcrumb
          location={location}
          crumbLabel={crumbLabel}
          crumbSeparator=">"
        />
      </div>
    </div>
  );
};

Breadcrumbs.propTypes = {
  location: PropTypes.any,
  crumbLabel: PropTypes.string,
};

export default Breadcrumbs;
