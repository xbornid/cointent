import { getCoinsQuery } from '@zoralabs/zora-coin-sdk';
import { getDefaultProvider } from 'ethers';

// Provider default dari jaringan Base
const provider = getDefaultProvider('https://mainnet.base.org');

export async function getCoins() {
  const coins = await getCoinsQuery({
    provider,
    sortBy: 'marketCap',
    limit: 10, // Ambil 10 coin teratas
  });

  return coins.map((coin) => ({
    name: coin.name,
    symbol: coin.symbol,
    address: coin.address,
    image: coin.image,
    marketCap: coin.marketCap,
  }));
}
