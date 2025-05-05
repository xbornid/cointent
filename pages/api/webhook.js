export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Webhook received:', req.body);
    res.status(200).json({ received: true });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
