import React, { useState } from 'react';

const Search = () => {
  // Use state to keep track of whether the search bar is visible
  const [showSearchBar, setShowSearchBar] = useState(false);

  // Define a function to toggle the search bar's visibility
  function toggleSearchBar() {
    setShowSearchBar(!showSearchBar);
  }
  return (
    <div className='relative flex rounded-md bg-primaryWhite'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 border-primaryWhite border-6'>
        <button className='block md:hidden lg:hidden' onClick={toggleSearchBar}>
          <svg
            width='21'
            height='21'
            viewBox='0 0 21 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              opacity='0.7'
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M20.314 18.899L16.031 14.617C17.3082 13.0237 18.0029 11.042 18 9C18 4.032 13.968 0 9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C11.042 18.0029 13.0237 17.3082 14.617 16.031L18.899 20.314L20.314 18.899ZM16 9C16.0029 10.8204 15.2941 12.5699 14.025 13.875L13.875 14.025C12.5699 15.2941 10.8204 16.0029 9 16C5.132 16 2 12.867 2 9C2 5.132 5.132 2 9 2C12.867 2 16 5.132 16 9Z'
              fill='white'
            />
          </svg>
        </button>
        <div className={`lg:flex md:block ${showSearchBar ? '' : 'hidden'}`}>
          <input
            className='w-full font-mono pl-12 pr-4 py-2 text-gray-300 bg-transparent focus:outline-none focus:shadow-outline placeholder-gray-300 text-sm sm:text-base'
            type='text'
            placeholder='Search...'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
