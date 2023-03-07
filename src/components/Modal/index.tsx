import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';

interface IProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  classname?: string;
  closeOnOutsideClick?: boolean;
}
/** Creates a portal exclusively for Modals - https://reactjs.org/docs/portals.html */
const modalRoot = document.getElementById('portal') as
  | Element
  | DocumentFragment;

const Wrapper = styled.div`
  min-height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .fade {
    z-index: 9999999;
  }
  .body {
    z-index: 99999999;
  }
`;

const Modal = React.forwardRef(
  (
    { isOpen, onClose, children, classname, closeOnOutsideClick }: IProps,
    ref
  ) => {
    /** Allow modal to be dismissed with Esc key */
    const handleKeyEvent = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    useEffect(() => {
      document.addEventListener('keydown', handleKeyEvent);
      return () => document.removeEventListener('keydown', handleKeyEvent);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return createPortal(
      <AnimatePresence>
        <div>Modal</div>
      </AnimatePresence>,
      modalRoot
    );
  }
);

export default Modal;
