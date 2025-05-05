export default async function handler(req, res) {
  const { trustedData, untrustedData } = req.body;
  const action = untrustedData?.buttonIndex;
  const fid = trustedData?.fid;
  const creator = untrustedData?.inputText || "unknown";

  console.log("Webhook triggered:", { fid, action, creator });

  switch (action) {
    case 1:
      console.log(`User ${fid} wants to BUY token from ${creator}`);
      break;
    case 2:
      console.log(`User ${fid} wants to SELL token from ${creator}`);
      break;
    case 3:
      console.log(`User ${fid} is now WATCHING ${creator}`);
      break;
    case 4:
      console.log(`User ${fid} has UNWATCHED ${creator}`);
      break;
    default:
      console.log("Unknown action");
  }

  return res.status(200).json({ message: "Action processed successfully" });
}
