import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex, rgb }) {
  return (
    <dl>

      {name && <><dt>Name:</dt>
      <dd>{name}</dd></>}

      <dt>Hex:</dt>
      <dd>{hex}</dd>

      <dt>RGB:</dt>
      <dd>Red: {rgb.red}</dd>
      <dd>Green: {rgb.green}</dd>
      <dd>Blue: {rgb.blue}</dd>
        
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.object.isRequired
};

export default Color;
