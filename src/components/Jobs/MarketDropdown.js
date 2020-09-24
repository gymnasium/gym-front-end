import React from 'react';

import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';

import { Text } from '@chakra-ui/core';

import './MarketDropdown.css';

import { MARKETS } from '../../utils/constants';

// take an array of markets, and render a ListboxOption for each of them
const marketOptionList = (markets, title) => {
  return (
    <>
      {title && (
        <ListboxOption disabled value={`disabled--${title}`}>
          <Text fontSize="larger" fontWeight="bold" textTransform="uppercase">
            {title}
          </Text>
        </ListboxOption>
      )}
      {markets.map(market => (
        <ListboxOption value={market.id.toString()} key={market.id}>
          {market.name}
        </ListboxOption>
      ))}
      <hr />
    </>
  );
};

const MarketDropdown = ({ onChange, value }) => {
  return (
    <Listbox
      defaultValue={MARKETS.DEFAULT_MARKET.id.toString()}
      value={value.toString()}
      onChange={onChange}
    >
      {marketOptionList(MARKETS.NORTH_AMERICAN_MARKETS, 'North America')}
      {marketOptionList(MARKETS.EUROPEAN_MARKETS, 'Europe')}
      {marketOptionList(MARKETS.ASIAN_MARKETS, 'Asia')}
      {marketOptionList(MARKETS.AUSTRALIAN_MARKETS, 'Australia')}
    </Listbox>
  );
};

export default MarketDropdown;
