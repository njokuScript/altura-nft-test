import React, { useEffect } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

export const ModalVariant = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.5)',
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    transform: 'scale(1)',
    transition: {
      duration: 0.3,
      delayChildren: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

interface IProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  classname?: string;
}
/** Creates a portal exclusively for Modals - https://reactjs.org/docs/portals.html */
const modalRoot = document.getElementById('portal') as
  | Element
  | DocumentFragment;

const Wrapper = styled.div`
  min-height: 50vh;
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
  ({ isOpen, onClose, children, classname }: IProps, ref: any) => {
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
              {/** Desktop modal */}
              <motion.div
                exit='hidden'
                initial='hidden'
                animate='visible'
                variants={ModalVariant}
                className='hidden fixed top-0 bottom-0 left-0 right-0 z-50 md:flex items-center justify-center h-screen body'>
                <Wrapper className='hidden md:block md:m-24 bg-primary max-w-5xl'>
                  <div className='absolute top-0 right-0 pt-4 pr-4 sm:block'>
                    <button
                      type='button'
                      className='rounded-md bg-primary text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      onClick={onClose}>
                      <span className='sr-only'>Close</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                  <div className='overflow-x-hidden overflow-y-auto '>
                    {children}
                  </div>
                </Wrapper>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>,
      modalRoot
    );
  }
);

export default Modal;
