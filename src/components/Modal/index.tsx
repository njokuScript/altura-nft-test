import React, { useEffect } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

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
    ref: any
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
        {isOpen && (
          <>
            <div className='fixed inset-0 bg-white bg-opacity-70 transition-opacity' />

            <div className={classname} ref={ref}>
              {/** Mobile modal */}
              <section className='flex justify-center fixed top-0 bottom-0 left-0 right-0 z-50 md:hidden bg-primary m-4 shadow-xl rounded-lg transform transition-all'>
                <div className='absolute top-0 right-0 pt-4 pr-4 sm:block'>
                  <button
                    type='button'
                    className='rounded-md bg-primary text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    onClick={onClose}>
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='w-full overflow-x-hidden overflow-y-auto '>
                  {children}
                </div>
              </section>
            </div>
          </>
        )}
      </AnimatePresence>,
      modalRoot
    );
  }
);

export default Modal;
