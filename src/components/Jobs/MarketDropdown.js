import React from 'react';

import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";

import { MARKETS } from '../../utils/constants';

const MarketDropdown = ({ onChange, value }) => {
  return (
    <Listbox defaultValue="popeyes" value={value} onChange={onChange}>
      {MARKETS.ALL_MARKETS.map(market => <ListboxOption value={market.id} key={market.id}>{market.name}</ListboxOption>)}
    </Listbox>
  )
};

export default MarketDropdown;