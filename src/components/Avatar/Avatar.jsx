import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

function Avatar({
  src: providedSrc,
  defaultSrc,
  className,
  size,
  initials,
  color,
}) {
  const [src, setSrc] = useState(providedSrc || defaultSrc);
  const [isInitialsShown, setInitialsShown] = useState(
    () => !providedSrc && Boolean(initials)
  );

  useEffect(() => {
    setInitialsShown(!providedSrc && Boolean(initials));
  }, [providedSrc, initials]);

  useEffect(() => {
    setSrc(providedSrc || defaultSrc);
  }, [providedSrc, defaultSrc]);

  const handleError = () => {
    if (initials) {
      setInitialsShown(true);
    } else {
      setSrc(defaultSrc);
    }
  }

  return (
    <Container
      size={size}
      className={className}
      color={isInitialsShown ? color : 'transparent'}
    >
      {isInitialsShown ? (
        <span>{initials}</span>
      ) : (
        <img src={src} alt="" onError={handleError} />
      )}
    </Container>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  defaultSrc: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  initials: PropTypes.string,
  color: PropTypes.string,
};

Avatar.defaultProps = {
  size: '4rem',
  color: '#9552D4',
};

export default Avatar;
