import React from 'react';

interface IProps {
  children?: React.ReactChild;
  image?: string;
  collectionName?: string;
  nftName?: string;
  rarity?: string;
  amount?: string;
}

const Cards = ({
  children,
  image,
  collectionName,
  nftName,
  rarity,
  amount,
}: IProps) => {
  return (
    <div className='m-4 bg-primaryWhite rounded-md border-2 border-gray-400 w-2/5'>
      <img src={image} alt='Image1' className='w-40 h-48 rounded-t-md p-2' />

      <div className=''>
        <div className='font-mono font-bold text-white text-sm'>
          {collectionName} - {rarity}
          <br />
          {nftName}
          <br />
          {amount}
        </div>
      </div>
    </div>
  );
};

export default Cards;
