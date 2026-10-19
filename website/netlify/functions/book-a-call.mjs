export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json' },
    });
  }

  let payload = {};
  try {
    payload = await req.json();
  } catch (err) {
    payload = {};
  }

  const inquiry = { receivedAt: new Date().toISOString(), ...payload };
  console.log('Inquiry received:', JSON.stringify(inquiry));

  return new Response(
    JSON.stringify({
      success: true,
      message: 'Thank you for your interest in Shopno Chitra. Our studio team will contact you shortly.',
    }),
    {
      status: 200,
      headers: { 'content-type': 'application/json' },
    }
  );
};
