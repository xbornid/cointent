export default async function handler(req, res) {
  const { trustedData, untrustedData } = req.body;
  const action = untrustedData?.buttonIndex; // tombol ditekan user

  const fid = trustedData?.fid;
  const creator = untrustedData?.inputText || "unknown";

  console.log("Webhook triggered:", { fid, action, creator });

  switch (action) {
    case 1: // Buy
      // Contoh logika buy
      console.log(`User ${fid} wants to BUY token from ${creator}`);
      // TODO: Integrasikan dengan smart contract atau API Zora
      break;

    case 2: // Sell
      console.log(`User ${fid} wants to SELL token from ${creator}`);
      // TODO: Integrasikan dengan smart contract atau API Zora
      break;

    case 3: // Watch
      console.log(`User ${fid} is now WATCHING ${creator}`);
      // TODO: Simpan ke database atau file siapa yang dipantau oleh siapa
      break;

    case 4: // Unwatch
      console.log(`User ${fid} has UNWATCHED ${creator}`);
      // TODO: Hapus dari daftar pantauan user
      break;

    default:
      console.log("Unknown action");
  }

  return res.status(200).json({ message: "Action processed successfully" });
}


 {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { event, notificationDetails } = req.body;

  switch (event) {
    case 'frame_added':
    case 'notifications_enabled':
      // Store notificationDetails.token and notificationDetails.url for future notifications
      break;
    case 'frame_removed':
      // Handle unsubscription logic
      break;
    default:
      // Handle other events or ignore
      break;
  }

  res.status(200).json({ status: 'ok' });
}
