import { useEffect, useState } from 'react';
import { getCoins } from '../lib/zora';
import { TokenCard } from '../components/TokenCard';
import { connectWallet } from '../lib/wallet';

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    async function initialize() {
      const userWallet = await connectWallet();
      setWallet(userWallet);
      const coinsData = await getCoins();
      setCoins(coinsData);
    }
    initialize();
  }, []);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Top Zora Coins</h1>
      {wallet && <p className="text-sm text-gray-500">Connected: {wallet.address}</p>}
      {coins.length === 0 ? (
        <p>Loading...</p>
      ) : (
        coins.map((coin, i) => (
          <TokenCard
            key={i}
            name={coin.name}
            symbol={coin.symbol}
            address={coin.address}
            image={coin.image}
            marketCap={coin.marketCap}
            onBuy={() => fetch('/api/webhook', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                trustedData: { fid: wallet?.address },
                untrustedData: { buttonIndex: 1, inputText: coin.address }
              })
            })}
            onSell={() => fetch('/api/webhook', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                trustedData: { fid: wallet?.address },
                untrustedData: { buttonIndex: 2, inputText: coin.address }
              })
            })}
            onWatch={() => fetch('/api/webhook', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                trustedData: { fid: wallet?.address },
                untrustedData: { buttonIndex: 3, inputText: coin.address }
              })
            })}
            onUnwatch={() => fetch('/api/webhook', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                trustedData: { fid: wallet?.address },
                untrustedData: { buttonIndex: 4, inputText: coin.address }
              })
            })}
          />
        ))
      )}
    </div>
  );
}
