import React from 'react';
import classNames from 'classnames';
interface IProps {
  className?: string;
  buttonText?: string;
  onClick?: () => void;
}

const Button = ({ className, buttonText, onClick }: IProps) => {
  return (
    <div className={classNames(className)}>
      <button
        onClick={onClick}
        type='button'
        className='rounded-xl bg-primaryButton py-4 px-24  text-sm font-mono font-semibold text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
