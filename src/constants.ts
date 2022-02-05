import { Token } from 'entities'
import JSBI from 'jsbi'

export enum ChainId {
  ASTAR_TEST = 591,
  ASTAR = 592
}

export const FACTORY_ADDRESS = '0x8242C4a9912e6d3B8da442F5Fd525fFa41598aA4'

export const INIT_CODE_HASH = '0xd748559ef6f8b6f01828010aede211ec76da263225b2296b70b836c012b87e74'

export const RPC = 'https://rpc.astar.network:8545/'

export const TOKEN_DECIMALS_CACHE: { [chainId: number]: { [address: string]: number } } = {}

export const NATIVE_TOKENS = {
  [ChainId.ASTAR_TEST]: new Token(ChainId.ASTAR_TEST, '0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720', 18, 'DEV', 'DEV'),
  [ChainId.ASTAR]: new Token(ChainId.ASTAR, '0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720', 18, 'ASTAR', 'ASTAR')
}

/* NO MORE MODIFICATIONS AFTER */

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
