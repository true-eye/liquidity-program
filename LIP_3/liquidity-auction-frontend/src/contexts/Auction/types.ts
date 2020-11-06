import { Contract } from 'web3-eth-contract'

export interface AuctionInfo {
  epochTime?: number,
  startTime?: Date
  P1?: number
  P2?: number
  P3?: number
  T1?: number
  T2?: number
  intervalLimit?: number
  minEther?: number
  maxEther?: number
}

export interface AuctionContext {
  auction: AuctionInfo
  auctionStarted: boolean
}

export interface AuctionData { 
  labels?: string[]
  prices?: number[]
  amounts?: number[]
  ethDeposited?: number
  totalAmount?: number
  kexPrice?: number
}