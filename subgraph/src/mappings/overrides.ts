import { Address, TypedMap } from '@graphprotocol/graph-ts';

export function getOverrides(): TypedMap<Address, boolean> {
  let overriddenTokens = new TypedMap<Address, boolean>();
  return overriddenTokens;
}

export function getMediatedTokens(): TypedMap<Address, Address> {
  let mediatedTokens = new TypedMap<Address, Address>();
  return mediatedTokens;
}
