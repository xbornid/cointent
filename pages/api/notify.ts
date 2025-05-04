// API route dummy untuk notifikasi (misalnya dipanggil oleh cron)
export default function handler(req, res) {
  res.status(200).json({ message: "Notification sent." });
}
