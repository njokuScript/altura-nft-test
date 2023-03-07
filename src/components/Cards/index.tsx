import React from 'react';
import { truncateAddress } from '../../libs/utils';

interface IProps {
  onclick?: () => void;
  image?: string;
  collectionName?: string;
  collectionImage?: string;
  nftName?: string;
  rarity?: string;
  amount?: string;
}

const Cards = ({
  onclick,
  image,
  collectionName,
  collectionImage,
  nftName,
  amount,
}: IProps) => {
  return (
    <div
      onClick={onclick}
      className='relative my-4 bg-primaryWhite rounded-lg h-96 w-auto overflow-hidden'>
      <img
        src={image}
        alt='Image1'
        className='w-full h-60 object-cover inset-0'
      />
      <div className='px-4'>
        <div className='font-mono font-bold text-white mt-2 pt-2'>
          {nftName}
        </div>
        <div className='flex justify-between items-center pt-12'>
          <div className='font-mono text-xs font-semibold text-orange-200 pr-5'>
            {amount}
          </div>
          <div className='flex items-center'>
            <img
              className='h-4 w-auto rounded-full '
              src={collectionImage}
              alt='Logo'
            />
            <div className='font-mono text-xs text-white pl-2'>
              {collectionName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
