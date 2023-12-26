// LinkComponent.jsx

import React from "react";
import PropTypes from "prop-types";
import "./linkStyles.css";

function LinkComponent({ name, href, className }) {
  return (
    <a href={href} className={`modal-button ${className}`}>
      {name}
    </a>
  );
}

LinkComponent.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkComponent;
