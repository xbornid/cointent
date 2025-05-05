export async function getCoins() {
  const res = await fetch("https://api.zora.co/coins?sort=marketCap&limit=10");
  const data = await res.json();
  return data.coins || [];
}
