export async function createCheckout(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email } = req.body;

  const now = new Date();
  const nextFirst = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const anchorTimestamp = Math.floor(nextFirst.getTime() / 1000);

  const params = new URLSearchParams({
    'mode': 'subscription',
    'payment_method_types[0]': 'card',
    'line_items[0][price]': 'price_1TbieMCAmwgcIfGn1JIdKBV4',
    'line_items[0][quantity]': '1',
    'customer_email': email,
    'subscription_data[billing_cycle_anchor]': String(anchorTimestamp),
    'subscription_data[proration_behavior]': 'create_prorations',
    'success_url': 'https://coachcooper
