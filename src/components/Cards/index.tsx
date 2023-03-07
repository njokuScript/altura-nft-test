import React from 'react';

interface IProps {
  onclick?: () => void;
  image?: string;
  collectionName?: string;
  nftName?: string;
  rarity?: string;
  amount?: string;
}

const Cards = ({
  onclick,
  image,
  collectionName,
  nftName,
  rarity,
  amount,
}: IProps) => {
  return (
    <div
      onClick={onclick}
      className='m-4 bg-primaryWhite rounded-md border-2 border-gray-400 '>
      <img src={image} alt='Image1' className='h-48 w-auto rounded-t-md p-2' />
      <div className='p-4'>
        <div className='font-mono font-bold text-white text-sm'>
          {collectionName} - {rarity}
          <div className='text-gray-400 pt-1'>{nftName}</div>
          <div className='text-xs pt-4'>{amount}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
