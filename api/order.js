// File: api/order.js di Vercel

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxHpOQgJawxSNWAaTY4B93OiAPAZKNtfh4mp5L7CQ_r9vzQ_LXgOEh1ibyDnMXx5rw9_w/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      });

      const result = await response.json();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
