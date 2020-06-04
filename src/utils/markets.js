/* eslint-disable import/prefer-default-export */
import { MARKETS } from './constants';

export const findMarketById = marketId => {
  if (!marketId) return null;

  const { ALL_MARKETS } = MARKETS;

  return ALL_MARKETS.find(market => market.id === marketId);
};
