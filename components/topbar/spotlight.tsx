import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const SpotlightSearch = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="flex flex-row items-center justify-center absolute md:top-40 top-20 md:left-[33%] h-[58px] min-w-screen md:min-w-[660px] bg-gray-300  rounded-md shadow-lg focus:outline-none transition duration-300 text-black ">
         <span className="text-3xl cursor-default rounded flex items-center px-4">
          <Icon icon="bx:search" style ={{ color: "#4b5563"}} />
        </span>
      <div className="relative w-full mr-12">

        <input
          className="w-full  py-3 text-2xl bg-gray-300 "
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Spotlight Search"
          type="text"
          value={query}
        />
      </div>
    </div>
  );
};

export default SpotlightSearch;
