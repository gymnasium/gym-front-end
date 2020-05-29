import React from 'react';

import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';

import './MarketDropdown.css';

import { MARKETS } from '../../utils/constants';

const MarketDropdown = ({ onChange, value }) => {
  return (
    <Listbox defaultValue="popeyes" value={value} onChange={onChange}>
      {MARKETS.NORTH_AMERICAN_MARKETS.map(market => (
        <ListboxOption value={market.id} key={market.id}>
          {market.name}
        </ListboxOption>
      ))}
      <hr />
      {MARKETS.EUROPEAN_MARKETS.map(market => (
        <ListboxOption value={market.id} key={market.id}>
          {market.name}
        </ListboxOption>
      ))}
      <hr />
      {MARKETS.ASIAN_MARKETS.map(market => (
        <ListboxOption value={market.id} key={market.id}>
          {market.name}
        </ListboxOption>
      ))}
      <hr />
      {MARKETS.AUSTRALIAN_MARKETS.map(market => (
        <ListboxOption value={market.id} key={market.id}>
          {market.name}
        </ListboxOption>
      ))}
    </Listbox>
  );
};

export default MarketDropdown;
