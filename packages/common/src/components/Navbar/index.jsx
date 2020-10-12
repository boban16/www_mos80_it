import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useIsomorphicLayoutEffect } from 'react-use';

// eslint-disable-next-line no-undef
const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null;

/**
 * Navbar is advanced component which allows using different navs for desktop
 * and mobile versions which is rendered using portals.
 */
const Navbar = ({ children, rwdMenu }) => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const rootElemRef = useRef(
    // eslint-disable-next-line no-undef
    typeof document !== `undefined` ? document.createElement('div') : null,
  );

  const rootElemRefCurrent = rootElemRef.current;

  const handleToggle = () => setMobileIsOpen(s => !s);
  const handleClose = () => setMobileIsOpen(false);

  useEffect(() => {
    if (portalRoot) {
      portalRoot.appendChild(rootElemRefCurrent);
    }

    return () => {
      if (portalRoot) {
        portalRoot.removeChild(rootElemRefCurrent);
      }
    };
  }, [rootElemRefCurrent]);

  useIsomorphicLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      if (mobileIsOpen) {
        // eslint-disable-next-line no-undef
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        // eslint-disable-next-line no-undef
        document.querySelector('body').style.overflow = '';
      }
    }
  }, [mobileIsOpen]);

  return (
    <>
      {children({
        isOpen: mobileIsOpen,
        onToggle: handleToggle,
        onClose: handleClose,
      })}
      {rootElemRef &&
        rootElemRef.current &&
        ReactDOM.createPortal(
          rwdMenu({
            isOpen: mobileIsOpen,
            onToggle: handleToggle,
            onClose: handleClose,
          }),
          rootElemRef.current,
        )}
    </>
  );
};

Navbar.propTypes = {
  /**
   * Children of desktop navbar
   */
  children: PropTypes.func.isRequired,
  /**
   * Function which render rwdMenu with arguments isOpen, onToggle and onClose
   */
  rwdMenu: PropTypes.func.isRequired,
};

export default Navbar;
