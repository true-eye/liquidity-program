import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'
import { useWallet } from 'use-wallet'
import { getETHPriceInUSD } from '../utils'
import useKira from './useKira'
import useBlock from './useBlock'
import { TokenPrice } from '../contexts/TokenPrice'
import config from '../config'

const useTokenPrice = () => {
  const [tokenPrice, setTokenPrice] = useState<TokenPrice>({ ETH: 0, KEX: 0, lpToken: 0 });
  const { account }: { account: string; ethereum: provider } = useWallet()
  const kira = useKira()
  const block = useBlock()

  const fetchETHPriceInUSD = useCallback(async () => {
    // const ethPrice = await getETHPriceInUSD()
    const ethPrice = 595.3
    const kexPrice = ethPrice * config.ratio

    setTokenPrice({
      ETH: ethPrice,
      KEX: kexPrice,
    })
  }, [account, kira])

  useEffect(() => {
    if (account && kira) {
        fetchETHPriceInUSD()
    }
  }, [account, block, setTokenPrice, kira])

  return tokenPrice
}

export default useTokenPrice