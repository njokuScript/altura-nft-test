import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
interface IProps {
  className?: string;
  buttonText?: string;
  route: string;
}

const Button = ({ className, buttonText, route }: IProps) => {
  return (
    <div className={classNames(className)}>
      <Link
        to={route}
        className='rounded-xl bg-primaryButton py-4 px-24  text-sm font-mono font-semibold text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
        {buttonText}
      </Link>
    </div>
  );
};

export default Button;
