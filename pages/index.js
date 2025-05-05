import { useEffect, useState } from 'react';
import { getCoins } from '../lib/zora';
import { TokenCard } from '../components/TokenCard';

export default function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function loadCoins() {
      const coinsData = await getCoins();
      setCoins(coinsData);
    }
    loadCoins();
  }, []);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Top Zora Coins</h1>
      {coins.length === 0 ? (
        <p>Loading...</p>
      ) : (
        coins.map((coin, i) => (
          <TokenCard
            key={i}
            name={coin.name}
            symbol={coin.symbol}
            onBuy={() => alert(`Buying ${coin.symbol}`)}
            onSell={() => alert(`Selling ${coin.symbol}`)}
            onWatch={() => alert(`Watching ${coin.symbol}`)}
          />
        ))
      )}
    </div>
  );
}