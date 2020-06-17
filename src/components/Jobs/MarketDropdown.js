import React from 'react';

import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';

import './MarketDropdown.css';

import { MARKETS } from '../../utils/constants';

// render a ListboxOption for a single market
const marketOption = market => {
  return (
    <ListboxOption value={market.id.toString()} key={market.id}>
      {market.name}
    </ListboxOption>
  );
};

// take an array of markets, and render a ListboxOption for each of them
const marketOptionList = markets => {
  return markets.map(market => marketOption(market));
};

const MarketDropdown = ({ onChange, value }) => {
  return (
    <Listbox
      defaultValue={MARKETS.DEFAULT_MARKET.id.toString()}
      value={value.toString()}
      onChange={onChange}
    >
      {marketOptionList(MARKETS.NORTH_AMERICAN_MARKETS)}
      <hr />
      {marketOptionList(MARKETS.EUROPEAN_MARKETS)}
      <hr />
      {marketOptionList(MARKETS.ASIAN_MARKETS)}
      <hr />
      {marketOptionList(MARKETS.AUSTRALIAN_MARKETS)}
    </Listbox>
  );
};

export default MarketDropdown;
