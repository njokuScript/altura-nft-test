import React from 'react';
interface IProps {
  buttonText?: string;
  onClick?: () => void;
}

const Button = ({ buttonText, onClick }: IProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type='button'
        className='rounded bg- bg-primaryButton py-1 px-10 w-full text-xs font-semibold text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
